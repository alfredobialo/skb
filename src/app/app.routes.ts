import { Routes } from '@angular/router';
import {todosRoute} from "./fetaures/todos/todos-routes";
import {counterAppRoute} from "./fetaures/counter/counter-routes";
import {SalesDashboardPage} from "./pages/back-page/sales-pages/sales-dashboard-page";

export const routes: Routes = [
  todosRoute,
  counterAppRoute,
  {
    path : "sales",
    loadComponent : () => import("./pages/back-page/sales-pages/sales-dashboard-page")
      .then(x => SalesDashboardPage),

  },
  {
    path:"",
    redirectTo : "/"+todosRoute.path, pathMatch: "full"
  },
  {
    path: "**",
    redirectTo : "/"+counterAppRoute.path, pathMatch: "full"
  }
];
