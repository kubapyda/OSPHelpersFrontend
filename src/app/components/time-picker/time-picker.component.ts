import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TimePickerComponent)
    }
  ]
})
export class TimePickerComponent implements OnInit, ControlValueAccessor {

  @Input()
  placeholder: string;

  value: string;
  onChange: Function = () => {};
  onTouched: Function = () => {};

  constructor() { }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  ngOnInit() {
  }

  changeTimeValue() {
    this.onChange(this.value);
  }

}
