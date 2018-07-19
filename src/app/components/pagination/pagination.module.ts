import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material';

import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination.component';
import { PaginationTranslating } from './pagination-translating';
import { SharedModule } from '@app/shared';
import { TranslateService } from '@ngx-translate/core';

@NgModule({
  imports: [
    SharedModule,
    MatPaginatorModule
  ],
  exports: [PaginationComponent],
  declarations: [PaginationComponent],
  providers: [
    MatPaginator,
    {
      provide: MatPaginatorIntl,
      useClass: PaginationTranslating,
      deps: [TranslateService]
    }
  ]
})
export class PaginationModule { }
