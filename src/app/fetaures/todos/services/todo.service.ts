import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of, tap} from "rxjs";
import {ApiResponse, ApiResponseData, PagedApiResponse, TodoItemModel} from "../model/TodoItemModel";
import {BaseService} from "../../../shared/services/base-service";
import {ToastMessageService} from "../../../shared/services/ToastMessageService";

@Injectable({providedIn: 'root'})
export class TodoService extends BaseService {
  private url = super.baseUrl.todo + "/todos";

  constructor(private httpClient: HttpClient, private toastService : ToastMessageService) {
    super();
  }

  getTodos(criteria: any): Observable<PagedApiResponse<TodoItemModel[]>> {
    var response = this.httpClient
      .get<PagedApiResponse<TodoItemModel[]>>(`${this.url}`, {
        params: criteria
      }).pipe(
        catchError(err => {
          console.log("Error Info : ", err.error);
          return of({
            success: false,
            message: "An Error has Occurred",
            hasError: true,
            data: []
          });
        })
      )
    return response;
  }

  addTodo(todoTitle: string) {
    return this.httpClient.post<ApiResponseData<string>>(this.url, {todo: todoTitle})
      .pipe(
        tap(console.log),
        catchError(err => {
          const errResponse = of(err.error);
          this.toastService.showError(err.error.message, {},"An error Occurred", 5000);
          return errResponse;
        }));
  }

  removeTodo(todoId: string) {
    return this.httpClient.delete<ApiResponse>(`${this.url}/${todoId}`, {})
      .pipe(tap(x => {
        return x
      }))
  }

  markAsDone(todoId: string) {
    return this.httpClient.put<ApiResponse>(`${this.url}/${todoId}/done`, {})
      .pipe(tap(x => {
        console.log("Tap Response : ", x);
        return x
      }))
  }
  markAllAsDone() {
    return this.httpClient.put<ApiResponse>(`${this.url}/all-done`, {})
      .pipe(tap(x => {
        console.log("Tap Response : ", x);
        return x
      }))
  }

  unMarkAsDone(todoId: string) {
    return this.httpClient.put<ApiResponse>(`${this.url}/${todoId}/not-done`, {})
      .pipe(tap(x => {
        console.log("Tap Response : ", x);
        return x
      }))
  }

  unMarkAllAsDone() {
    return this.httpClient.put<ApiResponse>(`${this.url}/all-not-done`, {})
      .pipe(tap(x => {
        console.log("Tap Response : ", x);
        return x
      }))
  }

  updateTodoTitle(todoId: string, title: string) {
    const payload : any = { todoId , title};
    return this.httpClient.put<ApiResponse>(`${this.url}/update-title`, payload)
      .pipe(tap(x => {
        console.log("Tap Response : ", x);
        return x
      }))
  }
}
