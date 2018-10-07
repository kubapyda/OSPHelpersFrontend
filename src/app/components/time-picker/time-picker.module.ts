import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { TimePickerComponent } from './time-picker.component';

@NgModule({
  imports: [
    SharedModule,
    MatInputModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  declarations: [TimePickerComponent],
  exports: [TimePickerComponent]
})
export class TimePickerModule { }
