import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatInputModule, MatTooltipModule } from '@angular/material';

import { InputNumberComponent } from './input-number.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    SharedModule,
    MatInputModule,
    MatTooltipModule
  ],
  exports: [InputNumberComponent],
  declarations: [InputNumberComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputNumberModule { }
