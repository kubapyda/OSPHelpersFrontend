import { Column, IconType } from '@app/components/table/models';

import { ColumnType } from '@app/shared/enums';
import { Injectable } from '@angular/core';
import { ModalService } from '@app/components/modal';
import { TableService } from '@app/components/table';

@Injectable()
export class MedicalExaminationModalTable {
  constructor(private table: TableService, private modal: ModalService) {}

  getConfig(): Array<Column> {
    this.table.clearColumns();
    this.table
      .addColumn('index')
      .addTranslation('medicalExamination.ordinalNumber')
      .save();
    this.table
      .addColumn('medicalExaminationDate')
      .setColumnType(ColumnType.DATE)
      .addTranslation('medicalExamination.medicalExaminationDate')
      .save();
    this.table
      .addColumn('endMedicalExaminationDate')
      .setColumnType(ColumnType.DATE)
      .addTranslation('medicalExamination.endMedicalExaminationDate')
      .save();

    return this.table.getConfig();
  }
}
