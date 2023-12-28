import {TodoItemModel} from "../model/TodoItemModel";
export const initialTodoList : TodoItemModel[] = [{
  title : "Sample Todo Item",
  id:"sample-todo",
  isDone:false,
  tag:"sample, test"
}];
export interface ITodoState {
  todos: TodoItemModel[],
  status: string | null
}
export const TodoState: ITodoState  = {
  todos : initialTodoList,
  status : "loaded"
}


