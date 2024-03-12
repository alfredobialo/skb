﻿import {AppMenuService} from "./app-menu.service";
import {routes} from "../../app.routes";
import {map, tap} from "rxjs";
import {MenuStore} from "../../fetaures/menus/menuStore";
import {inject} from "@angular/core";
export function appInitHook(appMenuService : AppMenuService) {
 const menuStore = inject(MenuStore);
  // access Route from Here
  console.log("APP_INIT_CALLED", routes)
  const appMenus = () => appMenuService.getAppMenus()
    .pipe(tap({
      next : (x)=>{
        if (x.data) {
          console.log("SETTING MENU STORE VALUE => ", x.data);
          menuStore.setAppMenu(x.data);
        }
      }
    }), map(x => {
      // map to new route here
      console.log(x.data);
      return x.data;
    }));
  ;
  return appMenus;
}
