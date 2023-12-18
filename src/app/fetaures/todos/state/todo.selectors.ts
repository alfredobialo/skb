import {IAppState} from "./todo.state";
import {createSelector} from "@ngrx/store";
 export const todoSelector=  (state:{todos : IAppState} ) => state.todos;

export const getTodoSelector =  createSelector(todoSelector,
  (state) => state.todos

);
