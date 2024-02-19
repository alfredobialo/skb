import {Route} from "@angular/router";
import {TodoAppPage} from "../../pages/front-page/todoApp-Page";
export  const todosRoute : Route =
  {
    title : "Todo App",
    data: {pageTitle : "Todo App"},
    path :'todo',
    loadComponent : () => import("../../pages/front-page/todoApp-Page")
      .then( x => TodoAppPage)
  };

