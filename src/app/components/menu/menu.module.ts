import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [MenuComponent],
  declarations: [MenuComponent],
  providers: [MenuService]
})
export class MenuModule { }
