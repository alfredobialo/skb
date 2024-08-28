import {Routes} from '@angular/router';
import {FrontPageLayoutComponent} from "./pages/front-page/front-page-layout.component";
import {adminPanelRoutes} from "./pages/back-page/adminPanelRoutes";
import {frontPageRoutes} from "./pages/front-page/frontPageRoutes";


export const baseRoutes: Routes = [
  {
    path: "app",
    loadChildren: () => adminPanelRoutes,
    loadComponent : () => import("./pages/back-page/base-layout").then (x  => x.BaseLayout ),
    title: "App Loaded"
  },
  {
    path: "",
    loadComponent: () => import("./pages/front-page/front-page-layout.component").then(x => FrontPageLayoutComponent),
    loadChildren: () => frontPageRoutes
  }
  /* {
     path : "",
     redirectTo : "auth/login",
     pathMatch : "full"
   }*/
];
