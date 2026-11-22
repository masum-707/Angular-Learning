import { HttpInterceptorFn, HttpResponse } from "@angular/common/http";
import { tap } from "rxjs";

export const responseInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(

        tap(res => {

            if (res instanceof HttpResponse) {

                console.log('Response received:', res.body);

            }

        })

    );
}