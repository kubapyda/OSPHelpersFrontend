import { Route, RouterModule } from '@angular/router';

import { FirefightersComponent } from './firefighters.component';
import { NgModule } from "@angular/core";
import { TranslateResolver } from '@app/core/language';

const route: Route = {
  path: '',
  component: FirefightersComponent,
  data: {
    i18n: ['firefighters']
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
