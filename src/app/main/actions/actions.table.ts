import { Column, IconType } from '@app/components/table/models';

import { ColumnType } from '@app/shared/enums';
import { Injectable } from '@angular/core';
import { TableService } from '@app/components/table';

@Injectable()
export class ActionsTable {
  constructor(private table: TableService) {}

  getConfig(): Array<Column> {
    this.table
      .addColumn('id', '51px')
      .addTranslation('global.id')
      .save();
    this.table
      .addColumn('kind')
      .setColumnType(ColumnType.TRANSLATE_TEXT)
      .addTranslation('actions.interventionType')
      .setTranslationPrefix('actions.actionsType')
      .save();
    this.table
      .addColumn('date')
      .setColumnType(ColumnType.DATE)
      .addTranslation('actions.date')
      .save();
    this.table
      .addColumn('eventAddress')
      .addTranslation('actions.eventAddress')
      .save();
    this.table
      .addColumn('time')
      .setColumnType(ColumnType.TIME)
      .addTranslation('actions.time')
      .save();
    this.table
      .addColumn('cars')
      .setColumnType(ColumnType.LIST)
      .addTranslation('actions.multitudeName')
      .save();
    this.table
      .addColumn('firefighters', '250px')
      .setColumnType(ColumnType.LIST)
      .addTranslation('actions.firefightersName')
      .save();

    return this.table.getConfig();
  }
}
