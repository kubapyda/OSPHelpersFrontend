import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { isArray } from 'lodash';

@Injectable()
export class Principal {

  private role: string;
  private id: number;

  constructor() {}

  getUserInfoFromToken() {
    const helper = new JwtHelperService();
    const userInfo = helper.decodeToken(sessionStorage.getItem('authorization-token'));
    if (userInfo) {
      this.role = userInfo.scope;
      this.id = userInfo.id;
    }
  }

  getUserRole(): string {
    return this.role;
  }

  getUserId(): number {
    return this.id;
  }

  hasPermision(role: string): boolean {
    return role === this.role;
  }

}
