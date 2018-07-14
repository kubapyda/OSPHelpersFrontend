import { MAIN_ROUTES } from './main.routing';
import { MainComponent } from './main.component';
import { MenuModule } from '../components/menu/menu.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MenuModule,
    RouterModule.forChild(MAIN_ROUTES)
  ],
  declarations: [MainComponent]
})
export class MainModule {
  constructor() { }
}
