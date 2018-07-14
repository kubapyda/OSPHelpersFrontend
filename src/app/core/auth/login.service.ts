import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private router: Router) { }

  login(credentials) {
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      sessionStorage.setItem('authorization-token', 'true');
      this.router.navigate(['']);
    }
  }

  logout() {
    sessionStorage.removeItem('authorization-token');
    this.router.navigate(['login']);
  }

}
