import { Routes } from '@angular/router';
import {SalesDashboardPage} from "./pages/back-page/sales-pages/sales-dashboard-page";
import {DashboardComponent} from "./pages/back-page/dashboard-pages/dashboard.component";
import {TodoAppPage} from "./pages/front-page/todoApp-Page";
import {CounterAppPage} from "./pages/front-page/counterApp-Page";
import {LoginPageComponent} from "./pages/front-page/auth/login-page.component";
import {BaseLayout} from "./pages/back-page/base-layout";
import {FrontPageLayoutComponent} from "./pages/front-page/front-page-layout.component";
import {AboutPageComponent} from "./pages/front-page/company-pages/about-page.component";
import {HomePageComponent} from "./pages/front-page/company-pages/home-page.component";
import {FaqPageComponent} from "./pages/front-page/company-pages/faq-page.component";
import {PrivacyPageComponent} from "./pages/front-page/company-pages/privacy-page.component";
import {ContactPageComponent} from "./pages/front-page/company-pages/contact-page.component";

export const routes: Routes = [
  {
    path:"dashboard",
    title :"Dashboard",
    /* children : [ todosRoute, counterAppRoute],*/
    component : DashboardComponent,

  },
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

const frontPageRoutes : Routes = [
  {
    path :"",
    component : HomePageComponent,
  },
  {
    path :"about",
    component : AboutPageComponent,
  },
  {
    path :"about/contact",
    component : ContactPageComponent,
  },
  {
    path :"faq",
    component : FaqPageComponent,
  },
  {
    path :"privacy",
    component : PrivacyPageComponent,
  },
  {
    path : "auth/login",
    component : LoginPageComponent
  }
];

export const baseRoutes: Routes = [
  {
    path : "app",
    children : routes,
    component : BaseLayout,
    title : "App Loaded"
  },
  {
    path :"",
    component : FrontPageLayoutComponent,
    children : frontPageRoutes
  }
 /* {
    path : "",
    redirectTo : "auth/login",
    pathMatch : "full"
  }*/
];
