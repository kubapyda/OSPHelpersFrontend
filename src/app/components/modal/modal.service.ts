import { MatDialog, MatDialogRef } from '@angular/material';

import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
  dialogRef: MatDialogRef<any>;

  constructor(private modal: MatDialog) {}

  open(component, data: Object = {}) {
    this.dialogRef = this.modal.open(component, {
      width: '950px',
      disableClose: true,
      data: data
    });
    return this.dialogRef;
  }

  close() {
    this.dialogRef.close();
  }
}
