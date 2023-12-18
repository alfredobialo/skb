export interface TodoItemModel{
  title?: string;
  id:string;
  isDone? : boolean;
  tag?: string;
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
