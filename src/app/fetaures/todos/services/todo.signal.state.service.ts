import {computed, Injectable, signal, Signal, WritableSignal, effect} from '@angular/core';
import {PagedApiResponse, TodoItemModel} from "../model/TodoItemModel";
import {TodoService} from "./todo.service";
import {Observable} from "rxjs";
import {map, exhaustMap} from "rxjs/operators";
import {toSignal,toObservable} from "@angular/core/rxjs-interop";

@Injectable({providedIn:"root"})
export class TodoSignalStateService {
  private todos$$: Signal<PagedApiResponse<TodoItemModel[]> | undefined> =signal<PagedApiResponse<TodoItemModel[]>>( {
    data : [],
  });
  private totalDone: Signal<number>;
  private items: Signal<TodoItemModel[]>;


  constructor(private todoService : TodoService) {
    this.totalDone = computed(() => {
      let total = this.todos$$()?.data.filter(x => x.isDone).length ?? 0;
      console.log("Total Done", total );

      return total;
    });

    this.items = computed(() => {
      console.log(this.todos$$(),"Todo Signal");
      return this.todos$$()?.data  ?? [];
    });

    effect((opt) => {
      console.log("Effect Ran for ", opt, this.getTodos());
    }, {allowSignalWrites : true});
  }
  setTodos(todoResponse : PagedApiResponse<TodoItemModel[]>){
    console.log("Set TODO STATE: ", todoResponse)
    /*this.todos$$.set(todoResponse);*/
    console.log("MIND TODO STATE: ", this.todos$$())
  }

  getTodosResponse() {
    console.log("Signal TODO"  , this.todos$$());
    return this.todos$$;
  }

  initTodoFromRx(criteria:any){
    this.todos$$ = toSignal<PagedApiResponse<TodoItemModel[]>>(
      this.todoService.getTodos(criteria) );

    console.log("rxDataSignal =>" , this.todos$$());
}

  initTodoFromService(criteria:any){

      this.todoService.getTodos(criteria)
        .pipe(map(x => {
        console.log("map(x => {})",x);
        console.log("rxDataSignal =>" , x);
        this.setTodos(x);
        return x;
      }));

  }
  getTodos() {
    console.log("Items : ", this.items())
    return this.items ;
  }

  getTotalDone() :WritableSignal<number> {
    return this.totalDone as WritableSignal<number>;
  }

  /*markAsDone(todo: TodoItemModel) {
    // mark  or or unmark the given todo item
    this.todos$$.update(x => {
      console.log("todo is: ", todo);
      x.data = [...x.data,todo]
      console.log("x Response is: ", x);
      return x;
    });
  }*/
}
