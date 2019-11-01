import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InputNumberComponent,
    multi: true
  }]
})
export class InputNumberComponent implements ControlValueAccessor {
  @Input()
  translateTooltip: string;
  @Input()
  translateKey: string;

  inputValue: any;
  onChange: Function = () => {};
  onTouched: Function = () => {};

  writeValue(val: number): void {
    this.inputValue = val;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  onKeyPress(e: any) {
    const regex = /^[0-9]$/;
    if (!regex.test(e.key)) {
      e.preventDefault();
    }
  }

  onKeyUpEvt(e: any) {
    this.onChange(parseInt(e.target.value, 10));
  }
}
