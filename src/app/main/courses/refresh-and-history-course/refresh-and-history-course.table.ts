import { Column } from '@app/components/table/models';
import { ColumnType } from '@app/shared/enums';
import { Injectable } from '@angular/core';
import { TableService } from '@app/components/table';

@Injectable()
export class RefreshAndHistoryCourseTable {
  constructor(private table: TableService) {}

  getConfig(): Column[] {
    this.table.clearColumns();
    this.table
      .addColumn('index')
      .addTranslation('courses.ordinalNumber')
      .save();
    this.table
      .addColumn('courseCompletitionDate')
      .setColumnType(ColumnType.DATE)
      .addTranslation('courses.courseCompleting')
      .save();
    this.table
      .addColumn('courseValidityEnd')
      .setColumnType(ColumnType.DATE)
      .addTranslation('courses.applicationDate')
      .save();

    return this.table.getConfig();
  }
}
