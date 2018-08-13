import { LoaderComponent, LoaderModule } from '@app/components/loader';

import { MAIN_ROUTES } from './main.routing';
import { MainComponent } from './main.component';
import { MenuModule } from '@app/components/menu';
import { NavbarModule } from '@app/components/navbar';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    SharedModule,
    NavbarModule,
    MenuModule,
    NgHttpLoaderModule,
    LoaderModule,
    RouterModule.forChild(MAIN_ROUTES)
  ],
  declarations: [MainComponent],
  entryComponents: [LoaderComponent]
})
export class MainModule {
  constructor() {}
}
