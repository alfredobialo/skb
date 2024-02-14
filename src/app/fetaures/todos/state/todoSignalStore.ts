import {patchState, signalStore, withComputed, withHooks, withMethods, withState} from "@ngrx/signals";
import {PagedApiResponse, TodoItemModel} from "../model/TodoItemModel";
import {computed, inject} from "@angular/core";
import map from "lodash/map";
import {TodoService} from "../services/todo.service";
import {tap, pipe, switchMap} from "rxjs";
import {rxMethod} from "@ngrx/signals/rxjs-interop";
import clone from "lodash/clone";
import {tapResponse} from "@ngrx/component-store";

export interface IApiTodoState {
  loading: boolean,
  response: PagedApiResponse<TodoItemModel[]>,
  selectedTodo?: string | null,
  criteria: { currentPage: number, pageSize: number, query: string }
}

const initialTodoState: IApiTodoState = {
  response: {data: [], success: true, currentPage: 1, pageSize: 10, message: "Initial Todo List"},
  loading: false,
  selectedTodo: null,
  criteria: {currentPage: 1, pageSize: 10, query: ''}
};

export const ApiSignalTodoStore = signalStore(
  {providedIn: 'root'},
  withState<IApiTodoState>(initialTodoState),
  withComputed((state) => ({
    totalDone: computed(() => {
      return state.response().data.filter(x => x.isDone == true).length;
    }),
    todos: computed(() => state.response.data()),
    todoReport : computed(() => {
      const allTodos = state.response().data;
      const done = allTodos.filter(x => x.isDone == true).length;
      const report = `${allTodos.length} task, ${done} done!`

      return report;
    })
  })),
  withMethods((store, todoService = inject(TodoService)) => ({
    async loadTodos() {
      console.log("LoadTodos Called");
      patchState(store, {loading: true});
      const response = await todoService.getTodosAsPromise(store.criteria);
      console.log("Todo Promise Call : ", response);
      patchState(store, {loading: false, response});
    },
    markTodo(todo: TodoItemModel) {
      const newData = map(store.response().data, (item) => {
        let t = clone(item);
        if (t.id === todo.id) {
          t.isDone = !t.isDone;
        }
        return t;
      });
      const newResponse = {data: newData}
      patchState(store, (s) => ({response: newResponse}));
    },
    getNewTodos() {
      const res = rxMethod<void>(
        pipe(
          tap(() => {
            patchState(store, {loading: true})
          }),
          switchMap((x) => {
            return todoService.getTodos({})
              .pipe(
                tapResponse({
                  next: (x) => {
                    patchState(store, {response: x});
                  },
                  error: err => console.log,
                  finalize: () => {
                    patchState(store, {loading: false})
                  }
                }))
          })
        )
      );
      res();
    },
    deleteTodo(todo:TodoItemModel){
      // Take all Todos Except the one we want to delete
      const allTodos = store.response().data.filter(x => {
        return x.id !== todo.id;
      });
      const newResponse = {data: allTodos}
      patchState(store, (s) => ({response: newResponse}));
    }
  })),
  withHooks({
    onInit(store) {
      store.getNewTodos();
      console.log("withHooks => ", store.response);
    }
  })
)
