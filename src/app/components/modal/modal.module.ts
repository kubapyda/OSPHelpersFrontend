import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [SharedModule, MatButtonModule, MatDialogModule],
  declarations: [ModalComponent, ConfirmModalComponent],
  exports: [ModalComponent, ConfirmModalComponent],
  providers: [ModalService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalModule {}
