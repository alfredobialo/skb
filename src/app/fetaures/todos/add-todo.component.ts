import {Component, OnInit, inject, input, model, output} from '@angular/core';
import {ApiSignalTodoStore} from "./state/todoSignalStore";
import {PrimeNgButtonComponents, PrimeNgInputComponents} from "../../shared/primeng-component-import";
import {TodoItemModel} from "./model/TodoItemModel";


@Component({
  imports:[PrimeNgButtonComponents, PrimeNgInputComponents],
  standalone:true,
  selector: 'ea-AddTodo',
  template: `
    <div class="p-2 mb-2">
      <div class="row align-items-center">
        <div class="col-12 col-md-10">
          <input class="form-control form-control-lg " [value] = "defText()"
                 (keyup)="setText(todoTitle.value)"
                 type="text" #todoTitle (keydown.enter)="addTodo(todoTitle)" >
        </div>
        <div class="col-12 col-md-2">
          <p-button
                    severity="primary"
                    [disabled]="!isValidInput"
                    (click)="addTodo(todoTitle)">Add <i class="ms-3 la la-check"></i></p-button>
        </div>
      </div>
    </div>
  `
})

export class AddTodoComponent implements OnInit {
  private store  = inject(ApiSignalTodoStore);
  defText =  model("");
  onTodoAdded = output<TodoItemModel>()
  isValidInput  = true;
  constructor() {
  }

  ngOnInit() {
  }

  addTodo(todoItem : HTMLInputElement) {
    if(todoItem.value !== ''){
      this.store.addTodo(todoItem.value);
      const isAdded = this.store.addedTodo;
      console.log("Add Todo RESPONSE",isAdded());
      if(isAdded().success)
        this.onTodoAdded.emit(isAdded().newTodo);
      todoItem.value ="";
      todoItem.focus();
    }
  }

  setText(value: string) {
    this.defText.set(value);
  }
}
