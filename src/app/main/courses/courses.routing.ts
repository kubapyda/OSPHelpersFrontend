import { Route, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { TranslateResolver } from '@app/core/language';

const route: Route = {
  path: '',
  component: CoursesComponent,
  data: {
    i18n: ['courses']
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
