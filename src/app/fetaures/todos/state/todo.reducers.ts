import {createReducer, on} from "@ngrx/store";
import {TodoState} from "./todo.state";
import {addTodoAction, removeTodoAction, todoMarkedAction} from "./todo.actions";
import map from "lodash/map";
import filter from "lodash/filter";
import clone from "lodash/clone";

export const todoReducers  = createReducer(TodoState,
  on(todoMarkedAction, (state, params) => {

    const data  = map(state.todos, (item) => {
      let t = clone(item);
      if(t.id === params.todoId){
        t.isDone = params.isDone;
      }
      return t;
    });
    return {todos : data, status : 'marked'};
  }),
  on(addTodoAction, (state, todo) => {
    return {todos: [todo.todo, ...state.todos], status: "added"};

  }),
  on(removeTodoAction, (state, params) => {

    const newState = {
      todos :  filter(state.todos , (x) => x.id != params.todoId),
      status :"removed"
    };
    return newState;
  }),
  )
