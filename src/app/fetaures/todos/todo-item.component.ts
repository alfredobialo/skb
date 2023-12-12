import {Component, OnInit, Input, Output} from '@angular/core';
import {TodoItemModel} from "./model/TodoItemModel";

@Component({
  standalone:true,
  selector: 'todo-item',
  template: `
    <div class="my-3 todo-border  d-flex justify-content-between align-items-center">
      <div class="d-flex">
        <input type="checkbox" class="form-check form-check-input" [defaultChecked]="todo.isDone" />
        <p class="mx-3" [class]="{'todo-done':todo.isDone, 'todo-not-done':!todo.isDone}">{{ todo.title }}</p>
      </div>
      <button class="btn btn-sm btn-outline-info">X</button>
    </div>
  `
})

export class TodoItemComponent implements OnInit {
  @Input({required : true}) todo!:TodoItemModel ;
  constructor() {
  }

  ngOnInit() {
  }
}
