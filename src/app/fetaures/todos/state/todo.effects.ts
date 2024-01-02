import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from  "@angular/core";
import {TodoService} from "../services/todo.service";
@Injectable({providedIn: "root"})
export class TodoEffects {
  constructor(private todoService : TodoService , private action$ : Actions) {
    action$.pipe()
  }
}
