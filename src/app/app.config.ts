import {APP_INITIALIZER, ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter, withViewTransitions} from '@angular/router';

import { routes } from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import { provideClientHydration } from '@angular/platform-browser';
import {MessageService} from "primeng/api";
import {appInitHook} from "./shared/services/appInitHook";
import {AppMenuService} from "./shared/services/app-menu.service";
import {MenuStore} from "./fetaures/menus/menuStore";


export const appConfig: ApplicationConfig = {
  providers: [
   {provide : APP_INITIALIZER, useFactory : appInitHook, deps: [AppMenuService, MenuStore], multi : true},
    MessageService,
    provideRouter(routes, withViewTransitions({skipInitialTransition : false,
      onViewTransitionCreated : transitionInfo => {
      console.log("View Transition",transitionInfo)
      }})),
    provideAnimations(),
    provideHttpClient(withFetch()), provideClientHydration()
  ]
};
