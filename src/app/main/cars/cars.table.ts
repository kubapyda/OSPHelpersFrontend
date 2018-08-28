import { Column, IconType } from '@app/components/table/models';

import { ColumnType } from '@app/shared/enums';
import { Injectable } from '@angular/core';
import { TableService } from '@app/components/table';

@Injectable()
export class CarsTable {
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
      .addColumn('mark')
      .addTranslation('cars.mark')
      .save();
    this.table
      .addColumn('model')
      .addTranslation('cars.model')
      .save();
    this.table
      .addColumn('operationNumber')
      .addTranslation('cars.operationNumber')
      .save();
    this.table
      .addColumn('registrationNumber')
      .addTranslation('cars.registrationNumber')
      .save();
    this.table
      .addColumn('technicalExaminationDate')
      .setColumnType(ColumnType.DATE)
      .addTranslation('cars.technicalExaminationDate')
      .save();
    this.table
      .addColumn('insuranceDate')
      .setColumnType(ColumnType.DATE)
      .addTranslation('cars.insuranceDate')
      .save();
    this.table
      .addColumn('taskCar')
      .setColumnType(ColumnType.TRANSLATE_TEXT)
      .setTranslationPrefix('cars.tasksCar')
      .addTranslation('cars.taskCar')
      .save();
    this.table
      .addColumn('remove')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.REMOVE)
      .save();
    return this.table.getConfig();
  }
}
