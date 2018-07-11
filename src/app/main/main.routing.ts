import { MainComponent } from './main.component';
import { Routes } from '@angular/router';
import { TranslateResolver } from '../core/language/translate-resolver';
import { UserAccessGuard } from './../core/auth/user-access.service';

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
