import { MatDialog, MatDialogRef } from '@angular/material';

import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

  dialogRef: MatDialogRef<any>;

  constructor(private modal: MatDialog) { }

  open(component): void {
    this.dialogRef = this.modal.open(component, { width: '950px', disableClose: true });
  }

  close() {
    this.dialogRef.close();
  }
}
