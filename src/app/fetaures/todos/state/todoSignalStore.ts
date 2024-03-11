﻿import {patchState, signalStore, withComputed, withHooks, withMethods, withState} from "@ngrx/signals";
import {ApiResponse, PagedApiResponse, TodoItemModel, TodoItemUtil} from "../model/TodoItemModel";
import {computed, inject, Injector} from "@angular/core";
import map from "lodash/map";
import {TodoService} from "../services/todo.service";
import {tap, pipe, switchMap} from "rxjs";
import {rxMethod} from "@ngrx/signals/rxjs-interop";
import clone from "lodash/clone";
import {tapResponse} from "@ngrx/operators";
import {ToastMessageService} from "../../../shared/services/ToastMessageService";

export interface IApiTodoState {
  loading: boolean,
  processing: boolean,
  response: PagedApiResponse<TodoItemModel[]>,
  selectedTodo?: string | null,
  criteria: { currentPage: number, pageSize: number, query: string }
}

const initialTodoState: IApiTodoState = {
  response: {data: [], success: true, currentPage: 1, pageSize: 10, message: "Initial Todo List"},
  loading: false,
  processing: false, // When we perform actions like :Add, Remove, Mark, UnMark todos etc
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
      const report = allTodos.length > 0 ? `${allTodos.length} task, ${done} done!` : "No Todo";

      return report;
    })
  })),
  withMethods((store, todoService = inject(TodoService),
               injector = inject(Injector), toastService = inject(ToastMessageService)
               ) => ({
    markTodo(todo: TodoItemModel) {
      //const markTodo = rxMethod(pipe(), { injector} )
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
    addTodo(todo:string){
      toastService.showError("Adding Todo Sample Fake Error", {},"An error Occurred");
      const addToServer = rxMethod<string>(
        pipe(
          tap(x => {
            patchState(store, { processing : true})
          }),
          switchMap(x => todoService.addTodo(x)
            .pipe(tapResponse( {
              next : (x) => {
                if(x.success){
                  const newTodo = TodoItemUtil.new(todo);
                  newTodo.id = x.data;
                  const newResponse = { data : [newTodo, ...store.response().data]};
                  patchState(store , {response : newResponse});
                }
              },
              error : (err:ApiResponse) => {
                console.log("An error Occurred! => " , err);
                toastService.showError(err.message, {},"An error Occurred");

              },
              finalize : () => {
                patchState(store , { processing : false});
              }
            })))
        ), {injector: injector});
      // this should add the todo in the backend, return todo id if successful
      addToServer(todo);
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
      ,{injector : injector});
      res();
    },
    deleteTodo(todo:TodoItemModel){
      const deleteFromServer = rxMethod<string>(
        pipe(
          tap(x => {
            patchState(store, { processing : true})
          }),
          switchMap(x => todoService.removeTodo(x)
            .pipe(tapResponse( {
              next : (x) => {
                if(x.success){
                  const allTodos = store.response().data.filter(x => {
                    return x.id !== todo.id;
                  });
                  const newResponse = {data: allTodos}
                  patchState(store, (s) => ({response: newResponse}));
                }
              },
              error : err => {
                console.log("An error Occurred! => " , err);
              },
              finalize : () => {
                patchState(store , { processing : false});
              }
            })))
        ), {injector: injector});
      // Take all Todos Except the one we want to delete
      deleteFromServer(todo.id);
    },
    markAllAsDone(){
      const newTodos = {data : store.response().data.map(x => {
        x.isDone = true;
        return x;
        })}
      patchState(store , {response : newTodos});
    },
    unMarkAll(){
      const newTodos = {data : store.response().data.map(x => {
          x.isDone = false;
          return x;
        })}
      patchState(store , {response : newTodos});
    }
  })),
  withHooks({
    onInit(store) {
      store.getNewTodos();
      console.log("withHooks => ", store.response);
    }
  })
)