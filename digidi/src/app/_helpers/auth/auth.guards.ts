import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NavController } from '@ionic/angular';

import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  /**
   *
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   */
  constructor(private _router: Router, private navCrtl: NavController, private _authenticationService: AuthenticationService) {}

  // canActivate
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this._authenticationService.currentUserValue;
    return true;
    if (currentUser) {
      // // check if route is restricted by role
      // if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
      //   // role not authorised so redirect to not-authorized page
      //   this.navCrtl.navigateRoot(['/','public','login']);
      //   return false;
      // }
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.navCrtl.navigateRoot(['/','public','login']);
    return false;
  }
}