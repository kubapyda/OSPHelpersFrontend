import { Component, OnInit } from '@angular/core';

import { Column } from './../../components/table/models/column';
import { PaginationConfig } from '@app/shared/model';
import { PaymentsService } from './payments.service';
import { PaymentsTable } from './payments.table';
import { TableService } from '@app/components/table';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  providers: [PaymentsTable, TableService]
})
export class PaymentsComponent implements OnInit {

  tableConfiguration: Column[];
  tableData: any[];
  paginationConfig = new PaginationConfig();

  constructor(private tableConfig: PaymentsTable, private paymentsService: PaymentsService) { }

  ngOnInit() {
    this.tableConfiguration = this.tableConfig.getConfig(this.loadPayments.bind(this));
    this.loadPayments();
  }

  changePage(evt) {
    this.loadPayments({ page: evt.pageIndex + 1 });
  }

  private loadPayments(params: Object = { page: 1 }) {
    this.paymentsService.findAll(params).subscribe(data => {
      this.tableData = data.body.data;
      this.paginationConfig.length = +data.body.totalCount;
    });
  }


}
