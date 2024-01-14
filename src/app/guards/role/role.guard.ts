import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  userProfile: any;

  constructor(private _auth: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(route)
    const payload: any = this._auth.getPayload();
    console.log(payload)
    if (!!route.data['role']) {

      const routeRoles = route.data['role'];
      console.log(routeRoles)
      console.log(payload)
      if (!!payload['role']) {
        const userRoles = payload['role'];
        if (userRoles.includes(routeRoles)) {
          // user's roles contains route's role
          return true;
        } else {
          // toaster-display role user needs to have to access this route;
          return false;
        }
      }
    }
    return false;
  }

}

