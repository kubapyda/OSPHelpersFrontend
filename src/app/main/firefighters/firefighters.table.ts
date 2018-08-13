import { Column, IconType } from '@app/components/table/models';

import { ColumnType } from '@app/shared/enums';
import { Injectable } from '@angular/core';
import { TableService } from '@app/components/table';

@Injectable()
export class FirefightersTable {
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
      .addColumn('name')
      .addTranslation('firefighters.name')
      .save();
    this.table
      .addColumn('surname')
      .addTranslation('firefighters.surname')
      .save();
    this.table
      .addColumn('gender')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.GENDER)
      .addTranslation('firefighters.gender')
      .save();
    this.table
      .addColumn('birthdayDate')
      .setColumnType(ColumnType.DATE)
      .addTranslation('firefighters.birthdayDate')
      .save();
    this.table
      .addColumn('entryDate')
      .setColumnType(ColumnType.DATE)
      .addTranslation('firefighters.entryDate')
      .save();
    this.table
      .addColumn('type')
      .setColumnType(ColumnType.TRANSLATE_TEXT)
      .setTranslationPrefix('firefighters.types')
      .addTranslation('firefighters.type')
      .save();
    this.table
      .addColumn('remove')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.REMOVE)
      .save();
    return this.table.getConfig();
  }
}
