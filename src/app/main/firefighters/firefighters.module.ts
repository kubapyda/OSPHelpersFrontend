import { FirefightersComponent } from './firefighters.component';
import { FirefightersRoutingModule } from './firefighters.routing';
import { NgModule } from '@angular/core';
import { PaginationModule } from '@app/components/pagination';
import { SharedModule } from '@app/shared';
import { TableModule } from '@app/components/table';

@NgModule({
  imports: [
    SharedModule,
    TableModule,
    PaginationModule,
    FirefightersRoutingModule
  ],
  declarations: [FirefightersComponent]
})
export class FirefightersModule { }
