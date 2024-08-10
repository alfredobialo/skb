import {Routes} from "@angular/router";

export const adminPanelRoutes: Routes = [
  {
    path: "dashboard",
    title: "Dashboard",
    loadComponent: () => import("./dashboard-pages/dashboard.component").then(x => x.DashboardComponent)

  },
  {
    path: "dashboard/login",
    loadComponent: () => import("../front-page/auth/login-page.component").then(x => x.LoginPageComponent),
    title: "Login to Continue"
  },

  {
    path: "dashboard/todos",
    title: "Todos",
    loadComponent: () => import("./todoApp-Page").then(x => x.TodoAppPage)

  }, {
    path: "dashboard/counter",
    title: (route, state) => {
      return "Dashboard : Counter Demo";
    },
    loadComponent: () => import("./counterApp-Page").then(x => x.CounterAppPage)

  },

  {
    path: "sales",
    title: "Sales",
    loadComponent: () => import("./sales-pages/sales-dashboard-page")
      .then(x => x.SalesDashboardPage),


  },
  {
    path: "",
    redirectTo: "/dashboard", pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/dashboard", pathMatch: "full"
  }
];
