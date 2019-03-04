import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private loggedInStatus = false;

  constructor() { }

  public setloggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }
  /*
  // Renvoi la liste des menus
  public getMenus(): Promise<any> {
    const promise = new Promise((resolve, reject)  => {
      if (MENUS.length > 0) {
        resolve(MENUS);
      } else {
        reject('no-menu');
      }
    });

    return promise;
  }*/
}
