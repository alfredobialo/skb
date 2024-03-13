
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
        console.log("MENU STORE => ",menu);
        patchState(store, {data : menu.data})
      },
      getAppMenu(){
        return store.data;
      }
    }
  })
);
