import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule {
  constructor() { }
}
