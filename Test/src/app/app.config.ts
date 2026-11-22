import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './Interceptor/api.interceptor';
import { errorInterceptor } from './Interceptor/error.interceptor';
import { responseInterceptor } from './Interceptor/response.interceptor';
import { loadingInterceptor } from './Interceptor/loading.interceptor';
import { retryInterceptor } from './Interceptor/retry.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        errorInterceptor,
        loadingInterceptor,
        responseInterceptor,
        retryInterceptor,
      ]),
    ),
    provideRouter(routes),
  ],
};
