import { MatButtonModule, MatCheckboxModule, MatDividerModule, MatInputModule, MatListModule, MatSelectModule } from '@angular/material';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { ActionsComponent } from './actions.component';
import { ActionsModalComponent } from './actions-modal/actions-modal.component';
import { ActionsRoutingModule } from './actions.routing';
import { ActionsService } from './actions.service';
import { AddFirefightersComponent } from './actions-modal/add-firefighters/add-firefighters.component';
import { AddMultitudeModalComponent } from './actions-modal/add-multitude-modal/add-multitude-modal.component';
import { AddUsedEquipmentItemsComponent } from './actions-modal/add-used-equipment-items/add-used-equipment-items.component';
import { DatePickerModule } from '@app/components/date-picker';
import { ModalModule } from '@app/components/modal';
import { PaginationModule } from '@app/components/pagination';
import { SharedModule } from '@app/shared';
import { TableModule } from '@app/components/table';
import { TimePickerModule } from '@app/components/time-picker';

@NgModule({
  imports: [
    SharedModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule,
    DatePickerModule,
    TimePickerModule,
    ModalModule,
    TableModule,
    PaginationModule,
    ActionsRoutingModule
  ],
  declarations: [
    ActionsComponent,
    ActionsModalComponent,
    AddMultitudeModalComponent,
    AddFirefightersComponent,
    AddUsedEquipmentItemsComponent
  ],
  entryComponents: [ActionsModalComponent, AddMultitudeModalComponent, AddFirefightersComponent, AddUsedEquipmentItemsComponent],
  providers: [ActionsService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ActionsModule { }
