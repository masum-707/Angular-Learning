import { HttpInterceptorFn } from '@angular/common/http';
import { SKIP_AUTH } from './http-contex.token';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token =`myToken1234`
  if (req.context.get(SKIP_AUTH)) {
    return next(req);
}
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
console.log(req.url)
  return next(authReq);
};
