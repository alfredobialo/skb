import {createAction, props} from "@ngrx/store";
import {TodoItemModel} from "../model/TodoItemModel";
export enum TodoActions{
  TODO_MARKED= "[TODOAPP] TODO_MARKED",
  TODO_ADDED ="[TODOAPP] TODO_ADDED",
  TODO_REMOVED ="[TODOAPP] TODO_REMOVED",
  TODO_GET ="[TODOAPP] TODO_GET_BY_ID",
  TODO_GET_ALL ="[TODOAPP] TODO_GET_ALL",
}

export  const todoMarkedAction =  createAction(TodoActions.TODO_MARKED,props<{todoId: string, isDone : boolean}>());
export  const addTodoAction =  createAction(TodoActions.TODO_ADDED,props<{todo : TodoItemModel}>());
export  const removeTodoAction =  createAction(TodoActions.TODO_REMOVED,props<{todoId: string}>());



