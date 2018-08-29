import { Route, RouterModule } from '@angular/router';

import { EquipmentComponent } from './equipment.component';
import { NgModule } from '@angular/core';
import { TranslateResolver } from '@app/core/language';

const route: Route = {
  path: '',
  component: EquipmentComponent,
  data: {
    i18n: ['equipment']
  },
  resolve: {
    translation: TranslateResolver
  }
};

@NgModule({
  imports: [RouterModule.forChild([route])],
  exports: [RouterModule]
})
export class EquipmentRoutingModule {
  constructor() {}
}
