import { Route, RouterModule } from '@angular/router';

import { EquipmentComponent } from './equipment.component';
import { NgModule } from '@angular/core';
import { TranslateResolver } from '@app/core/language';
import { UserAccessGuard } from '@app/core/auth';

const route: Route = {
  path: '',
  component: EquipmentComponent,
  canActivate: [UserAccessGuard],
  data: {
    i18n: ['equipment'],
    role: ['ADMIN']
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
