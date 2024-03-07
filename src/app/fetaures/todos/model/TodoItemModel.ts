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
export interface IApiQueryCriteria {
  sortBy?: string;
  pageSize: number,
  currentPage: number,
  query?: string;
}
export interface UserDataModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  hasErrors?: boolean;
  errors?: any[];
  code?: number;
}

export interface ApiResponseData<T> extends ApiResponse {
  data: T;
}

export interface PagedApiResponseData<T> extends ApiResponseData<T> {
  pageSize: number,
  currentPage?: number,
  totalRecord: number,
  totalPages?: number,
}
