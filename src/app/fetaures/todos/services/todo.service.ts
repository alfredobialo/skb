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

const data =
{
  "usePagination": true,
  "pageSize": 10,
  "currentPage": 1,
  "totalRecord": 0,
  "totalPages": 0,
  "data": [
  {
    "id": "001",
    "title": "Go to the Gym",
    "tag": "gym, fitness",
    "isDone": true
  },
  {
    "id": "002",
    "title": "Check your Outlook Mail",
    "tag": "email",
    "isDone": false
  },
  {
    "id": "003",
    "title": "Start working on Pend Task",
    "tag": "coding",
    "isDone": true
  },
  {
    "id": "004",
    "title": "Implement New Caching Invalidation Mechanism",
    "tag": "coding",
    "isDone": false
  },
  {
    "id": "005",
    "title": "Retest Caching for Transaction Limit",
    "tag": "coding",
    "isDone": false
  }
],
  "success": true,
  "message": "Todos loaded",
  "hasErrors": false,
  "errors": [],
  "code": 200
}
