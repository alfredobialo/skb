import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import {BaseLayout} from "./app/pages/base-layout";

const bootstrap = () => bootstrapApplication(BaseLayout, config);

export default bootstrap;
