import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PagedApiResponse, TodoItemModel} from "./model/TodoItemModel";
@Component({
  imports :[],
  standalone:true,
  selector: 'todo-item',
  template: `
    <div class="my-3 todo-border  d-flex justify-content-between align-items-center">
      <div class="d-flex">
        <input type="checkbox" class="form-check form-check-input" [defaultChecked]="todo.isDone" (click)="markAsDone(todo)" />
        <p class="mx-3 cursor-pointer" (dblclick)="markAsDone(todo)" [class]="{'todo-done':todo.isDone, 'todo-not-done':!todo.isDone}">{{ todo.title }}</p>
      </div>
      <button class="btn btn-outline-primary btn-sm">X</button>
    </div>
  `
})

export class TodoItemComponent implements OnInit {
  @Input({required : true}) todo!:TodoItemModel ;
  @Output() onMarked : EventEmitter<TodoItemModel> =  new EventEmitter<TodoItemModel>();

  private stateManager  = StateManager;
  constructor() {
  }

  ngOnInit() {
  }

  markAsDone(todo:TodoItemModel){
    todo.isDone = !todo.isDone

    // Raise an Event to listeners that state has Changed
    this.onMarked.emit(todo);
    this.stateManager.dispatchAction(
      {
        actionType: TodoActions.TODO_MARKED,
        actionParams: {id: todo.id, isDone: todo.isDone}
      });
  }
}
export enum TodoActions{
  TODO_MARKED= "[TODOAPP] TODO_MARKED",
  TODO_ADDED ="[TODOAPP] TODO_ADDED",
  TODO_REMOVED ="[TODOAPP] TODO_REMOVED",
  TODO_GET ="[TODOAPP] TODO_GET_BY_ID",
  TODO_GET_ALL ="[TODOAPP] TODO_GET_ALL",
}
export const StateManager ={
  dispatchAction : (action: ActionDispatcher) =>{
    switch (action.actionType){
      case TodoActions.TODO_MARKED:
        // perform the neccessary reducer and state mutation
        console.log("LOCAL STATE MANAGER: " , action)
        break;
    }
  }
}

export interface ActionDispatcher {
  actionType:string;
  actionParams? : any;
}
export const markTodoReducer = (currentState  :PagedApiResponse<TodoItemModel[]>, payload : any) => {
  //
  const id  = currentState.data.filter(x => x.id == payload.id)[0];
  id.isDone = payload.isDone;

  const data = currentState;

}
