import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [TranslateModule],
  exports: [CommonModule, FormsModule, TranslateModule, ReactiveFormsModule],
  declarations: []
})
export class SharedModule {}
