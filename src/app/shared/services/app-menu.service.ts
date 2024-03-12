import {Injectable} from '@angular/core';
import {BaseService} from "./base-service";
import {HttpClient} from "@angular/common/http";
import {ApiResponseData, ApiResponseHelper} from "../../fetaures/todos/model/TodoItemModel";
import {catchError, of, tap} from "rxjs";
import {AppFeatures} from "../models/AppMenu";

@Injectable({
  providedIn: 'root'
})
export class AppMenuService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();

  }

  getAppMenus() {
    const url = `${this.baseUrl.gateway}/app-menu`;
    console.log(url);
    return this.httpClient.get<ApiResponseData<AppFeatures>>(url)
      .pipe(tap({
        next: (x) => {
          console.log("App Menu => " ,x);
        },
        error: (err) => {
          console.log(err);
        }
      }), catchError( err => {
        console.error("Error Getting App Menus", err);
          return of(ApiResponseHelper.getErrorResponseData<AppFeatures>({data : undefined}));
      }));
  }
}
