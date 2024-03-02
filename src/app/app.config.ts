import {ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter, withViewTransitions} from '@angular/router';

import { routes } from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import { provideClientHydration } from '@angular/platform-browser';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions({skipInitialTransition : false, onViewTransitionCreated : transitionInfo => {
      console.log("View Transition",transitionInfo)
      }})),
    provideAnimations(),
    provideHttpClient(withFetch()), provideClientHydration()
  ]
};
