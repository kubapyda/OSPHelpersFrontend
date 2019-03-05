import { Route, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { TranslateResolver } from '@app/core/language';
import { UserAccessGuard } from '@app/core/auth';

const route: Route = {
  path: '',
  component: CoursesComponent,
  canActivate: [UserAccessGuard],
  data: {
    i18n: ['courses'],
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
export class CoursesRoutingModule {
  constructor() { }
}
