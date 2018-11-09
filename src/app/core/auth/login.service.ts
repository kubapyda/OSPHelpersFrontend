import { Credentials } from '@app/shared/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

@Injectable()
export class LoginService {

  constructor(private router: Router, private http: HttpClient) { }

  login(credentials: Credentials) {
    this.http.post(`${environment.SERVER_URL}/api/login`, credentials).subscribe((token: { token: string}) => {
      sessionStorage.setItem('authorization-token', token.token);
      this.router.navigate(['']);
    });
  }

  logout() {
    sessionStorage.removeItem('authorization-token');
    this.router.navigate(['login']);
  }

}
