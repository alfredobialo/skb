import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../../environments/environment";
import {catchError, delay, map, of} from "rxjs";
import {PagedApiResponse, TodoItemModel} from "../model/TodoItemModel";

@Injectable({providedIn: 'root'})
export class TodoService {
  private url = environment.baseUrl.todo;

  constructor(private httpClient: HttpClient) {
  }

  getTodos(criteria: any) {
    var response = this.httpClient
      .get<PagedApiResponse<TodoItemModel[]>>(`${this.url}/todos`, {
      params: {
        pageSize: 6,
        currentPage:1,
        query:'completed',
        usePagination:true
      }
    }).pipe(
        delay(1500),
        map( x => {
              console.log("Server Response : ", x);
              return x;
            }),
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

}
