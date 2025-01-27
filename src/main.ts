/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
providers: [
  provideHttpClient(withFetch()),
  // other providers
]
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  
 