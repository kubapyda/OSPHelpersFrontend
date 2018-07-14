import { FormBuilder, FormGroup } from '@angular/forms';

import { Component } from '@angular/core';
import { LoginService } from '../../core/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  credentials: FormGroup;

  constructor(private fb: FormBuilder, public login: LoginService) {
    this.credentials = this.createCredentialsForm();
  }

  private createCredentialsForm() {
    return this.fb.group({
      username: [''],
      password: ['']
    });
  }

}
