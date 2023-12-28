import {ITodoState} from "./todo.state";
import {createSelector} from "@ngrx/store";
 export const todoSelector=  (state: {todo : ITodoState} ) => state.todo;
export const getTodoSelector =  createSelector(todoSelector,
  (state) => state

);
