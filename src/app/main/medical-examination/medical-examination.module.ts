import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { DatePickerModule } from '@app/components/date-picker';
import { MatButtonModule } from '@angular/material';
import { MedicalExaminationComponent } from './medical-examination.component';
import { MedicalExaminationModalComponent } from './medical-examination-modal/medical-examination-modal.component';
import { MedicalExaminationRoutingModule } from './medical-examination.routing';
import { MedicalExaminationService } from './medical-examination.service';
import { ModalModule } from '@app/components/modal';
import { PaginationModule } from '@app/components/pagination';
import { SharedModule } from '@app/shared';
import { TableModule } from '@app/components/table';

@NgModule({
  imports: [
    SharedModule,
    TableModule,
    PaginationModule,
    ModalModule,
    MatButtonModule,
    DatePickerModule,
    MedicalExaminationRoutingModule
  ],
  declarations: [MedicalExaminationComponent, MedicalExaminationModalComponent],
  entryComponents: [MedicalExaminationModalComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [MedicalExaminationService]
})
export class MedicalExaminationModule { }
