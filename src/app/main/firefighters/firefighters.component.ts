import { Component, OnInit } from '@angular/core';
import { Firefighter, PaginationConfig } from '@app/shared/model';

import { Column } from '@app/components/table/models';
import { FirefightersDeleteComponent } from './firefighters-delete/firefighters-delete.component';
import { FirefightersModalComponent } from './firefighters-modal/firefighters-modal.component';
import { FirefightersService } from './firefighters.service';
import { FirefightersTable } from './firefighters.table';
import { ModalService } from '@app/components/modal';
import { TableService } from '@app/components/table';

@Component({
  selector: 'app-firefighters',
  templateUrl: './firefighters.component.html',
  styleUrls: ['./firefighters.component.scss'],
  providers: [FirefightersTable, TableService]
})
export class FirefightersComponent implements OnInit {
  tableData: Array<Firefighter>;
  tableConfig: Array<Column>;
  paginationConfig: PaginationConfig = new PaginationConfig();

  constructor(
    private firefightersTable: FirefightersTable,
    private modal: ModalService,
    private firefightersService: FirefightersService
  ) {
    this.tableConfig = this.firefightersTable.getConfig();
  }

  ngOnInit() {
    this.loadFirefighters();
  }

  changePage(evt): void {
    this.loadFirefighters({ page: evt.pageIndex + 1 });
  }

  openAddDialog(): void {
    this.modal
      .open(FirefightersModalComponent)
      .beforeClose()
      .subscribe(() => this.loadFirefighters());
  }

  openEditDialog(firefighter: Firefighter): void {
    this.modal
      .open(FirefightersModalComponent, { id: firefighter.id })
      .beforeClose()
      .subscribe(() => this.loadFirefighters());
  }

  openDeleteDialog(firefighter: Firefighter): void {
    this.modal
      .open(FirefightersDeleteComponent, {
        id: firefighter.id,
        name: `${firefighter.name} ${firefighter.surname}`
      })
      .beforeClose()
      .subscribe(() => this.loadFirefighters());
  }

  private loadFirefighters(params: Object = { page: 1 }): void {
    this.firefightersService.findAll(params).subscribe((data: any) => {
      this.paginationConfig.length = +data.body.totalCount;
      this.tableData = data.body.data;
    });
  }
}
