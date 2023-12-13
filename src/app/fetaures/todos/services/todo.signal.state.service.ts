import {computed, Injectable, signal, Signal, WritableSignal} from '@angular/core';
import {PagedApiResponse, TodoItemModel} from "../model/TodoItemModel";

@Injectable({providedIn:"root"})
export class TodoSignalStateService {
  private todos$$ =signal<PagedApiResponse<TodoItemModel[]>>( {
    data : [],
  });
  private totalDone: Signal<number>;
  private items: Signal<TodoItemModel[]>;


  constructor() {
    this.totalDone = computed(() => {
      return this.todos$$()?.data.filter(x => x.isDone).length ?? 0;
    });

    this.items = computed(() => {
      console.log(this.todos$$(),"Todo Signal");
      return this.todos$$()?.data  ?? [];
    });
  }
  setTodos(todoResponse : PagedApiResponse<TodoItemModel[]>){
    console.log("Set TODO STATE: ", todoResponse)
    this.todos$$.set(todoResponse);
    console.log("MIND TODO STATE: ", this.todos$$())
  }

  getTodosResponse() {
    return this.todos$$;
  }

  getTodos() {
    console.log("Items : ", this.items())
    return this.items ;
  }

  getTotalDone() :WritableSignal<number> {
    return this.totalDone as WritableSignal<number>;
  }

  markAsDone(todo: TodoItemModel) {
    // mark  or or unmark the given todo item
    this.todos$$.update(x => {
      console.log("todo is: ", todo);
      x.data = [...x.data,todo]
      console.log("x Response is: ", x);
      return x;
    });
  }
}
