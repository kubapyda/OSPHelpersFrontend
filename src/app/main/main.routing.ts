import { MainComponent } from './main.component';
import { Routes } from '@angular/router';
import { TranslateResolver } from '@app/core/language';
import { UserAccessGuard } from '@app/core/auth';

export const MAIN_ROUTES: Routes = [{
  path: '',
  component: MainComponent,
  canActivate: [UserAccessGuard],
  data: {
    i18n: ['login']
  },
  resolve: {
    translation: TranslateResolver
  },
  children: [{
    path: '**',
    redirectTo: '/'
  }]
}];
