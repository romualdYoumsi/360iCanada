import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

import { AuthService } from './services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private TAG =  AuthGuard.name;
  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private authServ: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // return false;
      // return this.authServ.isLoggedIn;
      const loggedIn = this.storage.get('ICANADA_IS_LOGGEDIN');
      // const loggedIn = (localStorage.getItem('ICANADA_IS_LOGGEDIN') === 'true');
      console.log(this.TAG, 'canActivate: loggedIn', loggedIn);
      return loggedIn === 1 ? true : false;
  }
}
