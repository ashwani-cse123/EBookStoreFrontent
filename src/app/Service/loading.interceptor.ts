// loading.interceptor.ts
import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from './loading.service';

export function loadingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const loadingService = inject(LoadingService);
  let activeRequests = 1;

  // Don't show loader for specific requests if needed
  if (req.url.includes('ignore-loader')) {
    return next(req);
  }

  loadingService.show();
  
  return next(req).pipe(
    finalize(() => {
      activeRequests--;
      if (activeRequests <= 0) {
        loadingService.hide();
      }
    })
  );
}