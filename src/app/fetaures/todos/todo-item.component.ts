import {ChangeDetectionStrategy,Input, Component, effect, EventEmitter, inject, input} from '@angular/core';
import {TodoItemModel} from "./model/TodoItemModel";
import {ApiSignalTodoStore} from "./state/todoSignalStore";

@Component({
  //changeDetection: ChangeDetectionStrategy.OnPush,
  standalone:true,
  selector: 'todo-item',
  template: `
    <div class="my-3 todo-border  d-flex justify-content-between align-items-center">
      <div class="d-flex">
        <input type="checkbox" class="form-check form-check-input" [defaultChecked]="todo().isDone" (click)="markAsDone(todo())" />
        <p class="mx-3 cursor-pointer todo-item" (dblclick)="markAsDone(todo())" [class]="{'todo-done':todo().isDone, 'todo-not-done':!todo().isDone}">{{ todo().title }}</p>
      </div>
      <button class="btn btn-outline-primary btn-sm" (click)="deleteTodo(todo())">X</button>
    </div>
  `
})

export class TodoItemComponent {

  todo = input.required<TodoItemModel>();
  private store = inject(ApiSignalTodoStore);

  constructor() {
 /*   effect(() => {
      console.log(this.todo.title,"Is Done", this.todo.isDone);
    })*/
  }
  markAsDone(todo:TodoItemModel){
   this.store.markTodo(todo);
   console.log("MARK TODO COMPONENT => ", todo);
  }

  deleteTodo(todo:TodoItemModel){
    if(confirm(`Are you sure you want delete the selected Todo [${todo.title}]`)){
      this.store.deleteTodo(todo);
    }

  }
}
