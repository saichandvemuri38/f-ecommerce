import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {
  constructor(public injectoror: Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.injectoror.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `${token.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
