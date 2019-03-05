import { Route, RouterModule } from '@angular/router';

import { MedicalExaminationComponent } from './medical-examination.component';
import { NgModule } from '@angular/core';
import { TranslateResolver } from '@app/core/language';
import { UserAccessGuard } from '@app/core/auth';

const route: Route = {
  path: '',
  component: MedicalExaminationComponent,
  canActivate: [UserAccessGuard],
  data: {
    i18n: ['medical-examination'],
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
export class MedicalExaminationRoutingModule {
  constructor() { }
}
