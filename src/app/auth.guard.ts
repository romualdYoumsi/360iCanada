import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private TAG =  AuthGuard.name;
  constructor(private authServ: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // return false;
      // return this.authServ.isLoggedIn;

      const loggedIn = (localStorage.getItem('isLoggedIn') === 'true');
      console.log(this.TAG, 'loggedIn', loggedIn);
      return loggedIn;
  }
}
