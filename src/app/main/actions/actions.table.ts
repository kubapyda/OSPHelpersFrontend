import { Column, IconType } from '@app/components/table/models';

import { ColumnType } from '@app/shared/enums';
import { Injectable } from '@angular/core';
import { TableService } from '@app/components/table';

@Injectable()
export class ActionsTable {
  constructor(private table: TableService) {}

  getConfig(): Array<Column> {
    this.table
      .addColumn('edit')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.EDIT)
      .save();
    this.table
      .addColumn('id', '51px')
      .addTranslation('global.id')
      .save();
    this.table
      .addColumn('remove')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.REMOVE)
      .save();
    return this.table.getConfig();
  }
}
