﻿import {Component, OnInit, inject} from '@angular/core';
import {ApiSignalTodoStore} from "./state/todoSignalStore";


@Component({
  standalone:true,
  selector: 'add-todo',
  template: `
    <div class="p-2 mb-2">
      <div class="row align-items-center">
        <div class="col-12 col-md-10">
          <input class="form-control form-control-lg " type="text" #todoTitle (keydown.enter)="addTodo(todoTitle)" >
        </div>
        <div class="col-12 col-md-2">
          <button class="btn btn-outline-primary" (click)="addTodo(todoTitle)">Add</button>
        </div>
      </div>
    </div>
  `
})

export class AddTodoComponent implements OnInit {
  private store  = inject(ApiSignalTodoStore);
  constructor() {
  }

  ngOnInit() {
  }

  addTodo(todoItem : HTMLInputElement) {
    if(todoItem.value !== ''){
      // add the todo
      this.store.addTodo(todoItem.value);
      todoItem.value ="";
    }
  }
}
