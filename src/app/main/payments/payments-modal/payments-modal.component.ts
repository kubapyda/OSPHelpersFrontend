import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppToastrService } from '@app/core/toastr';
import { Column } from '@app/components/table/models';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PaymentsModalTable } from './payments-modal.table';
import { PaymentsService } from '../payments.service';

@Component({
  selector: 'app-payments-modal',
  templateUrl: './payments-modal.component.html',
  styleUrls: ['./payments-modal.component.scss'],
  providers: [PaymentsModalTable]
})
export class PaymentsModalComponent implements OnInit {

  paymentsForm: FormGroup;
  tableConfiguration: Column[];
  tableData: any[];

  constructor(
    private fb: FormBuilder,
    private paymentsService: PaymentsService,
    private tableConfig: PaymentsModalTable,
    private toastr: AppToastrService,
    @Inject(MAT_DIALOG_DATA) private firefighter: { id: number, name: string }
  ) { }

  ngOnInit() {
    this.paymentsForm = this.createPaymentsForm();
    this.tableConfiguration = this.tableConfig.getConfig();
    this.getFirefighterPayments();
  }

  save() {
    this.paymentsService.create({
      paidYear: this.paymentsForm.get('lastPayment').value.getFullYear(),
      FirefighterId: this.firefighter.id
    }).subscribe(() => {
      this.getFirefighterPayments();
      this.paymentsForm.reset();
      this.toastr.success('payments.msg.create.success', {
        name: this.firefighter.name
      });
    },
    () => this.toastr.error('payments.msg.create.error'));
  }

  private getFirefighterPayments() {
    this.paymentsService.findFirefighterPayments(this.firefighter.id).subscribe(data => {
      this.tableData = data;
    });
  }

  private createPaymentsForm(): FormGroup {
    return this.fb.group({
      lastPayment: ['', Validators.required]
    });
  }

}
