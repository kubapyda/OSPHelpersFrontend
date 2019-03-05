import { Component, OnInit } from '@angular/core';

import { Column } from './../../components/table/models/column';
import { PaginationConfig } from '@app/shared/model';
import { PaymentsModalTable } from './payments-modal/payments-modal.table';
import { PaymentsService } from './payments.service';
import { PaymentsTable } from './payments.table';
import { Principal } from '@app/core/auth';
import { TableService } from '@app/components/table';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  providers: [PaymentsTable, PaymentsModalTable, TableService]
})
export class PaymentsComponent implements OnInit {

  tableConfiguration: Column[];
  tableData: any[];
  paginationConfig = new PaginationConfig();
  lastPayment: { isPaid: boolean, lastPaidYear: number } = { isPaid: false, lastPaidYear: 0 };

  constructor(
    private tableConfig: PaymentsTable,
    private paymentsService: PaymentsService,
    private principal: Principal,
    private tableModalConfig: PaymentsModalTable
  ) { }

  ngOnInit() {
    if (this.principal.hasPermision('ADMIN')) {
      this.tableConfiguration = this.tableConfig.getConfig(this.loadPayments.bind(this));
      this.loadPayments();
    } else {
      this.tableConfiguration = this.tableModalConfig.getConfig();
      this.loadFirefighterPayments();
    }
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

  private loadFirefighterPayments() {
    this.paymentsService.findFirefighterPayments(this.principal.getUserId()).subscribe(data => {
      this.tableData = data;
      this.getLastPaidYear();
    });
  }

  private getLastPaidYear() {
    const lastYear = this.tableData.reduce((paidYearFirst: any, paidYearSecond: any) => {
      return paidYearFirst.paidYear > paidYearSecond.paidYear
        ? paidYearFirst
        : paidYearSecond;
    });
    this.lastPayment = {
      isPaid: new Date().getFullYear() <= lastYear.paidYear,
      lastPaidYear: lastYear.paidYear
    };
  }
}
