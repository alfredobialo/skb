import {Component, OnInit, Input, Output} from '@angular/core';
import {TodoItemModel} from "./model/TodoItemModel";
import {PrimeNgButtonComponents, PrimeNgInputComponents} from "../../shared/primeng-component-import";

@Component({
  imports :[...PrimeNgInputComponents, ...PrimeNgButtonComponents],
  standalone:true,
  selector: 'todo-item',
  template: `
    <div class="my-3 todo-border  d-flex justify-content-between align-items-center">
      <div class="d-flex">
        <input type="checkbox" class="form-check form-check-input" [defaultChecked]="todo.isDone" />
        <p class="mx-3 cursor-pointer" (dblclick)="markAsDone(todo)" [class]="{'todo-done':todo.isDone, 'todo-not-done':!todo.isDone}">{{ todo.title }}</p>
      </div>
      <p-button>X</p-button>
    </div>
  `
})

export class TodoItemComponent implements OnInit {
  @Input({required : true}) todo!:TodoItemModel ;
  constructor() {
  }

  ngOnInit() {
  }

  markAsDone(todo:TodoItemModel){
    todo.isDone = !todo.isDone;
  }
}
