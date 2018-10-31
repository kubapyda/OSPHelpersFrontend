import { Route, RouterModule } from '@angular/router';

import { MedicalExaminationComponent } from './medical-examination.component';
import { NgModule } from '@angular/core';
import { TranslateResolver } from '@app/core/language';

const route: Route = {
  path: '',
  component: MedicalExaminationComponent,
  data: {
    i18n: ['medical-examination']
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
