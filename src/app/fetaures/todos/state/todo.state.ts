import {TodoItemModel} from "../model/TodoItemModel";
export const initialTodoState : TodoItemModel[] = [{
  title : "Sample Todo Item",
  id:"sample-todo",
  isDone:false,
  tag:"sample, test"
}];
export interface IAppState {
  todos: TodoItemModel[]
}
export const AppState:IAppState  = {
  todos : initialTodoState
}


