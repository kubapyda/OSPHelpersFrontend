import { Route, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { PaymentsComponent } from './payments.component';
import { TranslateResolver } from '@app/core/language';
import { UserAccessGuard } from '@app/core/auth';

const route: Route = {
  path: '',
  component: PaymentsComponent,
  canActivate: [UserAccessGuard],
  data: {
    i18n: ['payments'],
    role: ['ADMIN', 'USER']
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
