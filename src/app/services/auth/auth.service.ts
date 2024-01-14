import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(public http: HttpClient, public _route: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    console.log("Test")
  }
  parseJwt() {
    let sessionItem = this.getToken();
    let payload = JSON.parse(atob(sessionItem.split('.')[1]));
    console.log(sessionItem, payload)
    return payload;
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
    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem('token');
    }
  }
  public getRole() {
    return this.parseJwt().role;
  }
  public getPayload() {
    return this.parseJwt();
  }

}
