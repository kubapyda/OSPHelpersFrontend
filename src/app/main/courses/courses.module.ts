import { MatButtonModule, MatSelectModule } from '@angular/material';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { AddCourseComponent } from './add-course/add-course.component';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses.routing';
import { CoursesService } from './courses.service';
import { DatePickerModule } from '@app/components/date-picker';
import { ModalModule } from './../../components/modal/modal.module';
import { PaginationModule } from '@app/components/pagination';
import { RefreshAndHistoryCourseComponent } from './refresh-and-history-course/refresh-and-history-course.component';
import { SharedModule } from '@app/shared';
import { TableModule } from '@app/components/table';

@NgModule({
  imports: [
    SharedModule,
    TableModule,
    PaginationModule,
    ModalModule,
    MatButtonModule,
    MatSelectModule,
    DatePickerModule,
    CoursesRoutingModule
  ],
  entryComponents: [AddCourseComponent, RefreshAndHistoryCourseComponent],
  declarations: [CoursesComponent, AddCourseComponent, RefreshAndHistoryCourseComponent],
  providers: [CoursesService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CoursesModule { }
