
import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";
import {AppFeatures} from "../../shared/models/AppMenu";

const initialState : AppFeatures = {
  data : {
    notificationCount : 0,
    menus : [],
  }
};
export const MenuStore = signalStore({providedIn : "root"},
  withState<AppFeatures>(initialState),
  withMethods(store => {
    return {
      setAppMenu(menu : AppFeatures){

        patchState(store, {data : menu.data});
        console.log("SET MENU STORE => ",menu);
      },
      getAppMenu(){
        console.log("GET MENU STORE => ",store.data());
        return store.data;

      }
    }
  })
);
