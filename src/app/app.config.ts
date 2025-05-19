import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterseptorInterceptor } from './Service/auth/auth-interseptor.interceptor';
import { loadingInterceptor } from './Service/loading.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withInterceptors([authInterseptorInterceptor ,loadingInterceptor])),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideAnimationsAsync()]
};
