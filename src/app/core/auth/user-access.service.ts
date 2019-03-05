import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { get } from 'lodash';

@Injectable()
export class UserAccessGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = sessionStorage.getItem('authorization-token');
    if (token) {
      const helper = new JwtHelperService();
      const roles = get(route, 'data.role') as string[];
      if (helper.isTokenExpired(token)) {
          this.router.navigate(['login']);
          return !helper.isTokenExpired(token);
      }
      if (roles && !(roles.length === 0 || roles.includes(helper.decodeToken(token).scope))) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}
