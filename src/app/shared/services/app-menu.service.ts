import {Injectable} from '@angular/core';
import {BaseService} from "./base-service";
import {HttpClient} from "@angular/common/http";
import {ApiResponseData, ApiResponseHelper} from "../../fetaures/todos/model/TodoItemModel";
import {catchError, delay, of, tap} from "rxjs";
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

    return this.httpClient.get<ApiResponseData<AppFeatures>>(url)
      .pipe(
        //delay(7000),
        tap({
        next: (x) => {},
        error: (err) => {
          console.log(err);
        }
      }), catchError( err => {
        console.error("Error Getting App Menus", err);
          return of(ApiResponseHelper.getErrorResponseData<AppFeatures>({
            data : {
              menus : [],
              notificationCount : 0
            }
          }));
      }));
  }
}
