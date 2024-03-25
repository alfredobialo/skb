import { Routes } from '@angular/router';
import {todosRoute} from "./fetaures/todos/todos-routes";
import {counterAppRoute} from "./fetaures/counter/counter-routes";
import {SalesDashboardPage} from "./pages/back-page/sales-pages/sales-dashboard-page";
import {DashboardComponent} from "./pages/back-page/dashboard-pages/dashboard.component";

export const routes: Routes = [
  todosRoute,
  counterAppRoute,
  {
    path:"dashboard",
    title :"Dashboard",
    children : [ todosRoute, counterAppRoute],
    component : DashboardComponent,

  },
  {
    path : "sales",
    title:"Sales",
    loadComponent : () => import("./pages/back-page/sales-pages/sales-dashboard-page")
      .then(x => SalesDashboardPage),


  },
  {
    path:"",
    redirectTo : "/dashboard", pathMatch: "full"
  },
  {
    path: "**",
    redirectTo : "/"+counterAppRoute.path, pathMatch: "full"
  }
];
