import {Injectable} from '@angular/core';
import {BaseService} from "./base-service";
import {HttpClient} from "@angular/common/http";
import {ApiResponseData, ApiResponseHelper} from "../../fetaures/todos/model/TodoItemModel";
import {catchError, of, tap} from "rxjs";
import {AppFeatures} from "../models/AppMenu";
import {baseRoutes} from "../../baseRoutes"
@Injectable({
  providedIn: 'root'
})
export class AppMenuService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();

  }

  getAppMenus() {
    const url = `${this.baseUrl.gateway}/app-menu`;
    const appRoute  = baseRoutes;
    return this.httpClient.get<ApiResponseData<AppFeatures>>(url)
      .pipe(
        tap({
        next: (x) => {

        },
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
