import { MatIconModule, MatTableModule, MatTooltipModule } from '@angular/material';

import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { TableComponent } from './table.component';
import { TableService } from './table.service';

@NgModule({
  imports: [
    SharedModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule
  ],
  declarations: [TableComponent],
  exports: [TableComponent],
  providers: [TableService]
})
export class TableModule { }
