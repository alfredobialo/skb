import { Routes } from '@angular/router';
import {todosRoute} from "./fetaures/todos/todos-routes";
import {counterAppRoute} from "./fetaures/counter/counter-routes";

export const routes: Routes = [
  todosRoute,
  counterAppRoute,
  {
    path:"",
    redirectTo : "/"+todosRoute.path, pathMatch: "full"
  },
  {
    path: "**",
    redirectTo : "/"+counterAppRoute.path, pathMatch: "full"
  }
];
