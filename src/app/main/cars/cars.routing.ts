import { Route, RouterModule } from '@angular/router';

import { CarsComponent } from './cars.component';
import { NgModule } from '@angular/core';
import { TranslateResolver } from '@app/core/language';
import { UserAccessGuard } from '@app/core/auth';

const route: Route = {
  path: '',
  component: CarsComponent,
  canActivate: [UserAccessGuard],
  data: {
    i18n: ['cars'],
    role: ['ADMIN']
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
