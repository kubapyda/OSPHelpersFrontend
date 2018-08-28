import {
  MatButtonModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { CarsComponent } from './cars.component';
import { CarsDeleteComponent } from './cars-delete/cars-delete.component';
import { CarsModalComponent } from './cars-modal/cars-modal.component';
import { CarsRoutingModule } from './cars.routing';
import { CarsService } from './cars.service';
import { DateTimePickerModule } from '@app/components/date-time-picker';
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
    DateTimePickerModule,
    MatButtonModule,
    TableModule,
    PaginationModule
  ],
  declarations: [CarsComponent, CarsModalComponent, CarsDeleteComponent],
  entryComponents: [CarsModalComponent, CarsDeleteComponent],
  providers: [CarsService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CarsModule {}
