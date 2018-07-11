import { Route, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { NgModule } from "@angular/core";
import { TranslateResolver } from './../../core/language/translate-resolver';

const route: Route = {
  path: '',
  component: LoginComponent,
  data: {
    i18n: ['login']
  },
  resolve: {
    translation: TranslateResolver
  }
};

@NgModule({
  imports: [RouterModule.forChild([route])],
  exports: [RouterModule]
})
export class LoginRoutingModule {
  constructor() { }
}
