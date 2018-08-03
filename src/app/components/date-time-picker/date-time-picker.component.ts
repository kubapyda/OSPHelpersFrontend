import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DateTimePickerComponent)
    }
  ]
})
export class DateTimePickerComponent implements ControlValueAccessor, OnInit {
  value: string;
  @Input() name: string;
  @Input() placeholder: string;
  onChange: Function = () => {};
  onTouched: Function = () => {};

  constructor() {}

  ngOnInit() {}

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
}
