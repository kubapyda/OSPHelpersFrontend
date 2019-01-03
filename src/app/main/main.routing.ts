import { MainComponent } from './main.component';
import { Routes } from '@angular/router';
import { TranslateResolver } from '@app/core/language';
import { UserAccessGuard } from '@app/core/auth';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [UserAccessGuard],
    data: {
      i18n: ['login']
    },
    resolve: {
      translation: TranslateResolver
    },
    children: [
      {
        path: 'firefighters',
        loadChildren: './firefighters/firefighters.module#FirefightersModule'
      },
      {
        path: 'actions',
        loadChildren: './actions/actions.module#ActionsModule'
      },
      {
        path: 'cars',
        loadChildren: './cars/cars.module#CarsModule'
      },
      {
        path: 'medical-examination',
        loadChildren: './medical-examination/medical-examination.module#MedicalExaminationModule'
      },
      {
        path: 'courses',
        loadChildren: './courses/courses.module#CoursesModule'
      },
      {
        path: 'payments',
        loadChildren: './payments/payments.module#PaymentsModule'
      },
      {
        path: 'equipment',
        loadChildren: './equipment/equipment.module#EquipmentModule'
      },
      {
        path: '**',
        redirectTo: '/'
      }
    ]
  }
];
