import {
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule
} from '@angular/material';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { CarsComponent } from './cars.component';
import { CarsDeleteComponent } from './cars-delete/cars-delete.component';
import { CarsModalComponent } from './cars-modal/cars-modal.component';
import { CarsRoutingModule } from './cars.routing';
import { CarsService } from './cars.service';
import { DatePickerModule } from '@app/components/date-picker';
import { InputNumberModule } from '@app/components/input-number';
import { ModalModule } from '@app/components/modal';
import { PaginationModule } from '@app/components/pagination';
import { SharedModule } from '@app/shared';
import { TableModule } from '@app/components/table';

@NgModule({
  imports: [
    SharedModule,
    ModalModule,
    CarsRoutingModule,
    MatInputModule,
    MatSelectModule,
    DatePickerModule,
    MatButtonModule,
    TableModule,
    PaginationModule,
    MatTooltipModule,
    InputNumberModule
  ],
  declarations: [CarsComponent, CarsModalComponent, CarsDeleteComponent],
  entryComponents: [CarsModalComponent, CarsDeleteComponent],
  providers: [CarsService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CarsModule {}
