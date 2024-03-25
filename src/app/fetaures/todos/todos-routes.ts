import {ActivatedRouteSnapshot, MaybeAsync, Resolve, ResolveFn, Route, RouterStateSnapshot} from "@angular/router";
import {TodoAppPage} from "../../pages/front-page/todoApp-Page";
import {TodoItemModel} from "./model/TodoItemModel";

export const todosRoute: Route =
  {
    title: "Todo App",
    data: {pageTitle: "Todo App"},
    path: 'todo',
    loadComponent: () => import("../../pages/front-page/todoApp-Page")
      .then(x => TodoAppPage),
    /*resolve: (RouterStateSnapshot, ActivatedRouteSnapshot) => {
      return []
    }*/
  };


