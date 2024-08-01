import { Routes } from '@angular/router';
import {todosRoute} from "./fetaures/todos/todos-routes";
import {counterAppRoute} from "./fetaures/counter/counter-routes";
import {SalesDashboardPage} from "./pages/back-page/sales-pages/sales-dashboard-page";
import {DashboardComponent} from "./pages/back-page/dashboard-pages/dashboard.component";
import {TodoAppPage} from "./pages/front-page/todoApp-Page";
import {CounterAppPage} from "./pages/front-page/counterApp-Page";
import {LoginPageComponent} from "./pages/front-page/auth/login-page.component";

export const routes: Routes = [
  /*todosRoute,
  counterAppRoute,*/
  {
    path :"dashboard/login",
    component : LoginPageComponent,
    title: "Login to Continue"
  },

  {
    path:"dashboard/todos",
    title :"Todos",
    component : TodoAppPage,

  },{
    path:"dashboard/counter",
    title : (route, state) => {
      return "Dashboard : Counter Demo";
    },
    component : CounterAppPage,

  },
  {
    path:"dashboard",
    title :"Dashboard",
   /* children : [ todosRoute, counterAppRoute],*/
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
    redirectTo : "/dashboard", pathMatch: "full"
  }
];
