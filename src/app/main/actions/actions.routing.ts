import { Route, RouterModule } from '@angular/router';

import { ActionsComponent } from './actions.component';
import { NgModule } from '@angular/core';
import { TranslateResolver } from '@app/core/language';
import { UserAccessGuard } from '@app/core/auth';

const route: Route = {
  path: '',
  component: ActionsComponent,
  canActivate: [UserAccessGuard],
  data: {
    i18n: ['actions'],
    role: ['ADMIN', 'USER'],
  },
  resolve: {
    translation: TranslateResolver
  }
};

@NgModule({
  imports: [RouterModule.forChild([route])],
  exports: [RouterModule]
})
export class ActionsRoutingModule {
  constructor() {}
}
