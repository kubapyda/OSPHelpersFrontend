import { MAIN_ROUTES } from './main.routing';
import { MainComponent } from './main.component';
import { MenuModule } from '@app/components/menu';
import { NavbarModule } from '@app/components/navbar';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    SharedModule,
    NavbarModule,
    MenuModule,
    RouterModule.forChild(MAIN_ROUTES)
  ],
  declarations: [MainComponent]
})
export class MainModule {
  constructor() { }
}
