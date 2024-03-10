import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {BaseLayout} from "./app/pages/base-layout";

bootstrapApplication(BaseLayout, appConfig)
  .catch((err) => console.error(err));
