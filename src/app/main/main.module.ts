import { MAIN_ROUTES } from './main.routing';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(MAIN_ROUTES)
  ],
  declarations: [MainComponent]
})
export class MainModule {
  constructor() { }
}
