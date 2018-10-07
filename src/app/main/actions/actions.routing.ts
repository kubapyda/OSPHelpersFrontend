import { Route, RouterModule } from '@angular/router';

import { ActionsComponent } from './actions.component';
import { NgModule } from '@angular/core';
import { TranslateResolver } from '@app/core/language';

const route: Route = {
  path: '',
  component: ActionsComponent,
  data: {
    i18n: ['actions']
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
