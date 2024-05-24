import { HttpInterceptorFn } from '@angular/common/http';

export const authInteceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage?.getItem('auth_token');

  console.log('Entrou no interceptor', token);
  if (token) {
    console.log('Entrou no ifffffffffor', token);

    const authReq = req.clone({
      headers: req.headers.set('Authorization', token)
    });
    return next(authReq);
  }
  return next(req);
};
