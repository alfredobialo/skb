import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, delay, map, Observable, of} from "rxjs";
import {PagedApiResponse, TodoItemModel} from "../model/TodoItemModel";
import {BaseService} from "../../../shared/services/base-service";
@Injectable({providedIn: 'root'})
export class TodoService  extends BaseService{
  private url = super.baseUrl.todo;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getTodos(criteria: any):Observable<PagedApiResponse<TodoItemModel[]>> {
    var response = this.httpClient
      .get<PagedApiResponse<TodoItemModel[]>>(`${this.url}/todos`, {
      params: {
        pageSize: 6,
        currentPage:1,
        query:'completed',
        usePagination:true
      }
    }).pipe(
        delay(2500),
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
  getTodosAsPromise(criteria: any) {
    var response = this.httpClient
      .get<PagedApiResponse<TodoItemModel[]>>(`${this.url}/todos`, {
        params: {
          pageSize: 6,
          currentPage:1,
          query:'completed',
          usePagination:true
        }
      }).toPromise();

    return response;
  }
}
