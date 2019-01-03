import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { DatePickerModule } from '@app/components/date-picker';
import { MatButtonModule } from '@angular/material';
import { ModalModule } from '@app/components/modal';
import { PaginationModule } from './../../components/pagination/pagination.module';
import { PaymentsComponent } from './payments.component';
import { PaymentsModalComponent } from './payments-modal/payments-modal.component';
import { PaymentsRoutingModule } from './payments.routing';
import { PaymentsService } from './payments.service';
import { SharedModule } from '@app/shared';
import { TableModule } from '@app/components/table';

@NgModule({
  imports: [
    SharedModule,
    TableModule,
    PaginationModule,
    ModalModule,
    DatePickerModule,
    MatButtonModule,
    PaymentsRoutingModule
  ],
  declarations: [PaymentsComponent, PaymentsModalComponent],
  entryComponents: [PaymentsModalComponent],
  providers: [PaymentsService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PaymentsModule { }
