import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('authorization-token')) {
      const modified = req.clone({ setHeaders: { 'authorization': sessionStorage.getItem('authorization-token') }});
      return next.handle(modified);
    }
    return next.handle(req);
  }

}
