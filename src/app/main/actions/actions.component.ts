import { Component, OnInit } from '@angular/core';

import { ActionsModalComponent } from './actions-modal/actions-modal.component';
import { ActionsService } from './actions.service';
import { ActionsTable } from './actions.table';
import { Column } from '@app/components/table/models';
import { ModalService } from '@app/components/modal';
import { PaginationConfig } from '@app/shared/model';
import { TableService } from '@app/components/table';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  providers: [ActionsTable, TableService]
})
export class ActionsComponent implements OnInit {

  tableData: Array<any>;
  tableConfig: Array<Column>;
  paginationConfig: PaginationConfig = new PaginationConfig();

  constructor(private modal: ModalService, private actionsService: ActionsService, private actionsTable: ActionsTable) {
    this.tableConfig = this.actionsTable.getConfig();
  }

  ngOnInit() {
    this.loadActions();
  }

  changePage(evt): void {
    this.loadActions({ page: evt.pageIndex + 1 });
  }

  openAddDialog(): void {
    this.modal
      .open(ActionsModalComponent)
      .beforeClose()
      .subscribe(() => this.loadActions());
  }

  private loadActions(params: Object = { page: 1 }): void {}

}
