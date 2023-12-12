import {Injectable} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../../environments/environment";
import {delay, map} from "rxjs";

@Injectable({providedIn: 'root'})
export class TodoService {
  private url = environment.baseUrl.todo;

  constructor(private httpClient: HttpClient) {
  }

  getTodos(criteria: any) {
    var response = this.httpClient.get(`${this.url}/todos`, {
      params: {
        pageSize: 6,
        currentPage:1,
        query:'completed',
        usePagination:true
      }
    }).pipe(delay(500), map( x => {
      console.log("Server Response : ", x);
      return x;
    }))
    return response;
  }

}
