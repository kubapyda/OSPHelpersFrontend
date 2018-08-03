import {
  MatButtonModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { DateTimePickerModule } from '@app/components/date-time-picker';
import { FirefightersComponent } from './firefighters.component';
import { FirefightersDeleteComponent } from './firefighters-delete/firefighters-delete.component';
import { FirefightersModalComponent } from './firefighters-modal/firefighters-modal.component';
import { FirefightersRoutingModule } from './firefighters.routing';
import { ModalModule } from '@app/components/modal';
import { PaginationModule } from '@app/components/pagination';
import { SharedModule } from '@app/shared';
import { TableModule } from '@app/components/table';

@NgModule({
  imports: [
    SharedModule,
    TableModule,
    PaginationModule,
    MatButtonModule,
    ModalModule,
    MatInputModule,
    MatSelectModule,
    DateTimePickerModule,
    FirefightersRoutingModule
  ],
  declarations: [
    FirefightersComponent,
    FirefightersModalComponent,
    FirefightersDeleteComponent
  ],
  entryComponents: [FirefightersModalComponent, FirefightersDeleteComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FirefightersModule {}
