import * as _ from 'lodash';

import { Column, IconType } from '@app/components/table/models';

import { ColumnType } from '@app/shared/enums';
import { DomSanitizer } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { ModalService } from '@app/components/modal';
import { PaymentsModalComponent } from './payments-modal/payments-modal.component';
import { TableService } from '@app/components/table';

@Injectable()
export class PaymentsTable {
  constructor(private table: TableService, private modal: ModalService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'usd',
      sanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/icons/hand-holding-usd-solid.svg'
      )
    );
  }

  getConfig(loadFn?: Function): Column[] {
    this.table
      .addColumn('payments')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.CUSTOM, '80px', 'usd')
      .addIconClass('edit-icon')
      .addTooltip('medicalExamination.medicalExaminationModalLabel')
      .addActionForColumn((element) => {
        this.modal.open(PaymentsModalComponent, {
          id: _.get(element, 'fId'),
          name: _.get(element, 'name')
        }).beforeClose().subscribe(() => loadFn());
      })
      .save();
    this.table
      .addColumn('name', '250px')
      .addTranslation('payments.name')
      .save();
    this.table
      .addColumn('paidYear', '140px')
      .addTranslation('payments.lastPayments')
      .save();
    return this.table.getConfig();
  }
}
