import { CanActivate, Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class UserAccessGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const token = sessionStorage.getItem('authorization-token');
    if (token) {
      const helper = new JwtHelperService();
      return !helper.isTokenExpired(token);
    }
    this.router.navigate(['login']);
    return false;
  }

}
