import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { builder } from '@builder.io/sdk';
import { environment } from './environment';

builder.init(environment.builderApiKey);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
