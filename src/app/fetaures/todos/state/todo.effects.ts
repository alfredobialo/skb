import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from  "@angular/core";
import {TodoService} from "../services/todo.service";
import {exhaustMap} from "rxjs/operators";
@Injectable({providedIn: "root"})
export class TodoEffects {
  constructor(private todoService : TodoService , private action$ : Actions) {
  }



}
