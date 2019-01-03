import { Route, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { PaymentsComponent } from './payments.component';
import { TranslateResolver } from '@app/core/language';

const route: Route = {
  path: '',
  component: PaymentsComponent,
  data: {
    i18n: ['payments']
  },
  resolve: {
    translation: TranslateResolver
  }
};

@NgModule({
  imports: [RouterModule.forChild([route])],
  exports: [RouterModule]
})
export class PaymentsRoutingModule {
  constructor() { }
}
