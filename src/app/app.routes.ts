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
    loadComponent : () => import("./pages/back-page/dashboard-pages/dashboard.component").then (x  =>  x.DashboardComponent)

  },
  {
    path :"dashboard/login",
    loadComponent : () => import("./pages/front-page/auth/login-page.component").then (x  =>  x.LoginPageComponent),
    title: "Login to Continue"
  },

  {
    path:"dashboard/todos",
    title :"Todos",
    loadComponent : () => import("./pages/front-page/todoApp-Page").then (x  =>  x.TodoAppPage)

  },{
    path:"dashboard/counter",
    title : (route, state) => {
      return "Dashboard : Counter Demo";
    },
    loadComponent : () => import("./pages/front-page/counterApp-Page").then (x  =>  CounterAppPage)

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
    loadComponent : () => import("./pages/front-page/company-pages/home-page.component").then (x  =>  HomePageComponent)
  },
  {
    path :"about",
    loadComponent : () => import("./pages/front-page/company-pages/about-page.component").then (x  =>  AboutPageComponent)
  },
  {
    path :"about/contact",
    loadComponent : () => import("./pages/front-page/company-pages/contact-page.component").then (x  =>  ContactPageComponent),
  },
  {
    path :"faq",
    loadComponent : () => import("./pages/front-page/company-pages/faq-page.component").then (x  =>  FaqPageComponent)
  },
  {
    path :"privacy",
    loadComponent : () => import("./pages/front-page/company-pages/privacy-page.component").then (x  => PrivacyPageComponent )
  },
  {
    path : "auth/login",
    loadComponent : () => import("./pages/front-page/auth/login-page.component").then (x  =>  LoginPageComponent)
  }
];

export const baseRoutes: Routes = [
  {
    path : "app",
    loadChildren : () => routes,
    component : BaseLayout,
    title : "App Loaded"
  },
  {
    path :"",
    loadComponent : () => import("./pages/front-page/front-page-layout.component").then (x  =>  FrontPageLayoutComponent),
    loadChildren : () => frontPageRoutes
  }
 /* {
    path : "",
    redirectTo : "auth/login",
    pathMatch : "full"
  }*/
];
