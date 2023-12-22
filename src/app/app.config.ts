import {ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter, withViewTransitions} from '@angular/router';

import { routes } from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import {provideState, provideStore} from "@ngrx/store";
import {todoReducers} from "./fetaures/todos/state/todo.reducers";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideAnimations(),
    provideHttpClient(withFetch()),
    provideStore(),
    provideState({name: "todos", reducer: todoReducers}),
    provideStoreDevtools({
      autoPause:true,
      maxAge: 25,
      logOnly : !isDevMode(),
      trace:false,
      traceLimit : 80
    }), provideClientHydration()
  ]
};
