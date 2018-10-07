import {
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';

import { DatePickerComponent } from './date-picker.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    SharedModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [DatePickerComponent],
  exports: [DatePickerComponent]
})
export class DatePickerModule {}
