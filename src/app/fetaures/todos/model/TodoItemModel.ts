import UniqueId from "lodash/uniqueId";
import snakeCase from "lodash/snakeCase";
import trim from "lodash/trim";

export interface TodoItemModel{
  title?: string;
  id:string;
  isDone? : boolean;
  tag?: string;
}
export class TodoItemUtil{
  public static new(todoTitle : string) : TodoItemModel{
    const id = UniqueId("todo-");
    todoTitle = trim(todoTitle);
    return {
      isDone : false,
      title : todoTitle,
      id : id,
      tag : snakeCase(todoTitle)
    }
  }
}
export interface PagedApiResponse<T>{
  data: T,
  success?:boolean,
  message?:string,
  currentPage?:number,
  pageSize?: number,
  totalPages?: number,
  totalRecord?:number
}
