import {on , createReducer} from "@ngrx/store";
import {AppState, initialTodoState} from "./todo.state";
import {todoMarkedAction, addTodoAction, removeTodoAction} from "./todo.actions";
import map  from "lodash/map";
import filter from "lodash/filter";
import clone from "lodash/clone";
export const todoReducers  = createReducer(AppState,
  on(todoMarkedAction, (state, params) => {

    const data  = map(state.todos, (item) => {
      let t = clone(item);
      if(t.id === params.todoId){
        t.isDone = params.isDone;
      }
      return t;
    });
    return {todos : data};
  }),
  on(addTodoAction, (state, todo) => {
    const todos =  [todo.todo, ...state.todos];
    return {todos};

  }),
  on(removeTodoAction, (state, params) => {

    const newState = {todos :  filter(state.todos , (x) => x.id != params.todoId)};
    return newState;
  }),
  )
