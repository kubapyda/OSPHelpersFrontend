import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule
  ],
  exports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class SharedModule { }
