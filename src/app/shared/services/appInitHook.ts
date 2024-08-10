import {AppMenuService} from "./app-menu.service";
import {baseRoutes} from "../../baseRoutes";
import {map, tap} from "rxjs";
import {MenuStore} from "../../fetaures/menus/menuStore";
import {inject} from "@angular/core";
export function appInitHook(appMenuService : AppMenuService) {
 const menuStore = inject(MenuStore);
  // access Route from Here
  console.log("APP_INIT_CALLED", baseRoutes);

  const appMenus = () => appMenuService.getAppMenus()
    .pipe(tap({
      next : (x)=>{
        if (x.data) {
          console.log("SETTING MENU STORE VALUE => ", x.data);
          menuStore.setAppMenu(x.data);

        }
      }, finalize : () => {
        const elem = window.document.getElementById("app-loading");
        console.log("app-loading element", elem);
        elem?.remove();
      }
    }), map(x => {
      // map to new route here
      console.log(x.data);
      return x.data;
    }));
  ;
  return appMenus;
}
