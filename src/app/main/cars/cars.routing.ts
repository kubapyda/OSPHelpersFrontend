import { Route, RouterModule } from '@angular/router';

import { CarsComponent } from './cars.component';
import { NgModule } from '@angular/core';
import { TranslateResolver } from '@app/core/language';

const route: Route = {
  path: '',
  component: CarsComponent,
  data: {
    i18n: ['cars']
  },
  resolve: {
    translation: TranslateResolver
  }
};

@NgModule({
  imports: [RouterModule.forChild([route])],
  exports: [RouterModule]
})
export class CarsRoutingModule {
  constructor() {}
}
