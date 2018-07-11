import { FormBuilder, FormGroup } from '@angular/forms';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  credentials: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.credentials = this.createCredentialsForm();
  }

  login() {
    if (this.credentials.value.username === 'admin' && this.credentials.value.password === 'admin') {
      sessionStorage.setItem('authorization-token', 'true');
      this.router.navigate(['']);
    }
  }

  private createCredentialsForm() {
    return this.fb.group({
      username: [''],
      password: ['']
    });
  }

}
