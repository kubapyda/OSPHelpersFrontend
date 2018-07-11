import { CanActivate, Router } from '@angular/router';

import { Injectable } from '@angular/core';

@Injectable()
export class UserAccessGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (sessionStorage.getItem('authorization-token')) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}
