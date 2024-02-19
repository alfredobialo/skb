import {Route} from "@angular/router";
import {CounterAppPage} from "../../pages/front-page/counterApp-Page";

export const counterAppRoute : Route  = {
  title:"Counter App",
  data: {pageTitle : "Counter App"},
  path : "counter",
  loadComponent : () => import("../../pages/front-page/counterApp-Page")
    .then(x => CounterAppPage)
}
