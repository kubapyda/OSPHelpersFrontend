import * as _ from 'lodash';

import { Column, IconType } from '@app/components/table/models';

import { ColumnType } from '@app/shared/enums';
import { Injectable } from '@angular/core';
import { MedicalExaminationModalComponent } from './medical-examination-modal/medical-examination-modal.component';
import { ModalService } from '@app/components/modal';
import { TableService } from '@app/components/table';

@Injectable()
export class MedicalExaminationTable {
  constructor(private table: TableService, private modal: ModalService) {}

  getConfig(loadFn: Function): Column[] {
    this.table
      .addColumn('notesMedical')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.MEDICAL_NOTES)
      .addTooltip('medicalExamination.medicalExaminationModalLabel')
      .addActionForColumn((element) => {
        this.modal.open(MedicalExaminationModalComponent, {
          id: _.get(element, 'firefighter.id'),
          name: _.get(element, 'firefighter.name')
        }).beforeClose().subscribe(() => loadFn());
      })
      .save();
    this.table
      .addColumn('firefighter.name', '250px')
      .addTranslation('medicalExamination.name')
      .save();
    this.table
      .addColumn('medicalExaminationDate', '140px')
      .setColumnType(ColumnType.DATE)
      .addTranslation('medicalExamination.medicalExaminationDate')
      .save();
    this.table
      .addColumn('endMedicalExaminationDate', '240px')
      .setColumnType(ColumnType.DATE)
      .addTranslation('medicalExamination.endMedicalExaminationDate')
      .save();
    return this.table.getConfig();
  }
}
