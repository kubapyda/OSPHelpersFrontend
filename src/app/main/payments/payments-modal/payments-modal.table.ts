import { Column } from '@app/components/table/models';
import { ColumnType } from '@app/shared/enums';
import { Injectable } from '@angular/core';
import { TableService } from '@app/components/table';

@Injectable()
export class PaymentsModalTable {
  constructor(private table: TableService) {}

  getConfig(): Array<Column> {
    this.table.clearColumns();
    this.table
      .addColumn('index')
      .addTranslation('payments.ordinalNumber')
      .save();
    this.table
      .addColumn('paidYear')
      .setColumnType(ColumnType.TEXT)
      .addTranslation('payments.payedYear')
      .save();

    return this.table.getConfig();
  }
}
