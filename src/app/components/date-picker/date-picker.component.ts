import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { MatDatepicker } from '@angular/material';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DatePickerComponent)
    }
  ]
})
export class DatePickerComponent implements ControlValueAccessor {
  value: string | Date;
  @Input()
  name: string;
  @Input()
  placeholder: string;
  @Input()
  mode: string;
  onChange: Function = () => {};
  onTouched: Function = () => {};

  constructor() {}

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  changeDateValue(): void {
    this.onChange(this.value);
  }

  _selectYear(evt: Date, datepicker: MatDatepicker<any>) {
    if (this.mode === 'year') {
      datepicker.close();
      this.value = evt;
      this.onChange(this.value);
    }
  }
}
