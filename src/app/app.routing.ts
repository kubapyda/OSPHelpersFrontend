import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './content/login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
