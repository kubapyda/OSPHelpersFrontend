import { MatButtonModule, MatInputModule } from '@angular/material';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { DateTimePickerModule } from '@app/components/date-time-picker';
import { EquipmentComponent } from './equipment.component';
import { EquipmentDeleteComponent } from './equipment-delete/equipment-delete.component';
import { EquipmentModalComponent } from './equipment-modal/equipment-modal.component';
import { EquipmentRoutingModule } from './equipment.routing';
import { EquipmentService } from './equipment.service';
import { ModalModule } from '@app/components/modal';
import { PaginationModule } from '@app/components/pagination';
import { SharedModule } from '@app/shared';
import { TableModule } from '@app/components/table';

@NgModule({
  imports: [
    SharedModule,
    MatButtonModule,
    ModalModule,
    MatInputModule,
    DateTimePickerModule,
    TableModule,
    PaginationModule,
    EquipmentRoutingModule
  ],
  declarations: [EquipmentComponent, EquipmentModalComponent, EquipmentDeleteComponent],
  entryComponents: [EquipmentModalComponent, EquipmentDeleteComponent],
  providers: [EquipmentService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class EquipmentModule { }
