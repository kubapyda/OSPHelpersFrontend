import { Route, RouterModule } from '@angular/router';

import { FirefightersComponent } from './firefighters.component';
import { NgModule } from '@angular/core';
import { TranslateResolver } from '@app/core/language';
import { UserAccessGuard } from '@app/core/auth';

const route: Route = {
  path: '',
  component: FirefightersComponent,
  canActivate: [UserAccessGuard],
  data: {
    i18n: ['firefighters'],
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
export class FirefightersRoutingModule {
  constructor() { }
}
