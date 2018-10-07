import { Column, IconType } from '@app/components/table/models';

import { ColumnType } from '@app/shared/enums';
import { Injectable } from '@angular/core';
import { TableService } from '@app/components/table';

@Injectable()
export class ActionsModalTable {
  constructor(private table: TableService) {}

  getEquipmentItemsConfig(): Array<Column> {

    this.table.clearColumns();
    this.table
      .addColumn('id', '50px')
      .addTranslation('actions.usedEquipmentItems.id')
      .save();
    this.table
      .addColumn('value')
      .addTranslation('actions.usedEquipmentItems.name')
      .save();

    return this.table.getConfig();
  }

  getCarsConfig(): Array<Column> {

    this.table.clearColumns();
    this.table
      .addColumn('edit')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.EDIT)
      .save();
    this.table
      .addColumn('car')
      .addTranslation('actions.multitude.car')
      .save();
    this.table
      .addColumn('departureTime')
      .setColumnType(ColumnType.TIME)
      .addTranslation('actions.multitude.departureTime')
      .save();
    this.table
      .addColumn('arrivalTime')
      .setColumnType(ColumnType.TIME)
      .addTranslation('actions.multitude.arrivalTime')
      .save();
    this.table
      .addColumn('completeActivityTime')
      .setColumnType(ColumnType.TIME)
      .addTranslation('actions.multitude.completeActivityTime')
      .save();
    this.table
      .addColumn('returnTime')
      .setColumnType(ColumnType.TIME)
      .addTranslation('actions.multitude.returnTime')
      .save();
    this.table
      .addColumn('remove')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.REMOVE)
      .save();

    return this.table.getConfig();
  }

  getFirefightersConfig(): Array<Column> {

    this.table.clearColumns();
    this.table
      .addColumn('value')
      .addTranslation('actions.firefighters.name')
      .save();
    this.table
      .addColumn('car')
      .addTranslation('actions.firefighters.multitude')
      .save();

    return this.table.getConfig();
  }
}
