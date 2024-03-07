import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of, tap} from "rxjs";
import {ApiResponse, ApiResponseData, PagedApiResponse, TodoItemModel} from "../model/TodoItemModel";
import {BaseService} from "../../../shared/services/base-service";
@Injectable({providedIn: 'root'})
export class TodoService  extends BaseService{
  private url = super.baseUrl.todo+"/todos";

  constructor(private httpClient: HttpClient) {
    super();
  }

  getTodos(criteria: any):Observable<PagedApiResponse<TodoItemModel[]>> {
    var response = this.httpClient
      .get<PagedApiResponse<TodoItemModel[]>>(`${this.url}`, {
      params: {
        pageSize: 10,
        currentPage:1,
        query:'completed',
        usePagination:true
      }
    }).pipe(
        catchError(err => {
          console.log("Error Info : " , err);
            return of( {
              success : false,
              message : "An Error has Occurred",
              hasError : true,
              data: []
            });
        })
      )
    return response;
  }

  addTodo(todoTitle:string){
    return this.httpClient.post<ApiResponseData<string>>(this.url, { todo : todoTitle})
      .pipe(tap(x => {
        console.log("Tap Response : ", x);
        return x
      }))
  }
  removeTodo(todoId:string){
    return this.httpClient.delete<ApiResponse>(`${this.url}/${todoId}`, { })
      .pipe(tap(x => {
        console.log("Tap Response : ", x);
        return x
      }))
  }

  markAsDone(todoId:string){
    return this.httpClient.put<ApiResponse>(`${this.url}/${todoId}/done`, { })
      .pipe(tap(x => {
        console.log("Tap Response : ", x);
        return x
      }))
  }

  unMarkAsDone(todoId:string){
    return this.httpClient.put<ApiResponse>(`${this.url}/${todoId}/not-done`, { })
      .pipe(tap(x => {
        console.log("Tap Response : ", x);
        return x
      }))
  }
}
