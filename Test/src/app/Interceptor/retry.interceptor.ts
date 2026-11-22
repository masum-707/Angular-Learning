import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { retry, throwError, timer } from 'rxjs';

export const retryInterceptor: HttpInterceptorFn = (req, next) => {
    const shouldRetry = [0, 503,504];

    return next(req).pipe(
        retry({
            count: 4,
            delay: error => {
                if (error instanceof HttpErrorResponse && shouldRetry.includes(error.status)) {
                    return timer(1000);
                }

                return throwError(() => error);
            }
        })
    );
};