import { MatMenuModule, MatToolbarModule } from '@angular/material';

import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    SharedModule,
    MatToolbarModule,
    MatMenuModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
