import * as _ from 'lodash';

import { MatDialog, MatDialogRef } from '@angular/material';

import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
  dialogRef: Array<MatDialogRef<any>> = [];

  constructor(private modal: MatDialog) {}

  open(component, data: Object = {}, options: Object = {}) {
    this.dialogRef.push(this.modal.open(component, _.assignIn({
      width: '950px',
      disableClose: true,
      data: data
    }, options)));
    return _.last(this.dialogRef);
  }

  close(data?: Object) {
    _.last(this.dialogRef).close(data);
    this.dialogRef.splice(-1, 1);
  }
}
