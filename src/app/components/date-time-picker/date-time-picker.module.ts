import {
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';

import { DateTimePickerComponent } from './date-time-picker.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    SharedModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [DateTimePickerComponent],
  exports: [DateTimePickerComponent]
})
export class DateTimePickerModule {}
