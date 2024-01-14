import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Route ,Router} from '@angular/router';

import { Observable, catchError, BehaviorSubject, combineLatest, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(public http: HttpClient,public _route:Router,@Inject(PLATFORM_ID) private platformId: Object) {
    console.log("Test")
  }
  public loggedIn() {
    if (isPlatformBrowser(this.platformId)) {
      return !!sessionStorage.getItem('token');
    }
  }
  public logOut() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('payload');
    this._route.navigate(['/login'])
  }
  public getToken() {
    return sessionStorage.getItem('token');
  }
  public getRole() {
    return sessionStorage.getItem('token');
  }
  public getPayload() {
    return JSON.parse(sessionStorage.getItem('payload'));
  }

}
