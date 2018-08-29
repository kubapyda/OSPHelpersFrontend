import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AppToastrService } from '@app/core/toastr';
import { EquipmentItem } from '@app/shared/model';
import { EquipmentService } from './../equipment.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ModalService } from '@app/components/modal';

@Component({
  selector: 'app-equipment-modal',
  templateUrl: './equipment-modal.component.html',
  styleUrls: ['./equipment-modal.component.scss']
})
export class EquipmentModalComponent implements OnInit {

  equipmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private equipmentService: EquipmentService,
    private toastr: AppToastrService,
    private modal: ModalService,
    @Inject(MAT_DIALOG_DATA) private data: { id: number }
  ) {}

  ngOnInit() {
    this.getEquipmentItemById();
    this.equipmentForm = this.createEquipmentForm();
  }

  save(): void {
    if (this.data.id) {
      this.updateEquipmentItem();
    } else {
      this.saveEquipmentItem();
    }
  }

  private saveEquipmentItem(): void {
    this.equipmentService
      .save(this.equipmentForm.value)
      .subscribe(
        (equipmentItem: EquipmentItem) => {
          this.toastr.success('equipment.message.create.success', {
            name: equipmentItem.name
          });
          this.modal.close();
        },
        () => this.toastr.error('equipment.message.create.error')
      );
  }

  private updateEquipmentItem(): void {
    this.equipmentService
      .update(this.data.id, this.equipmentForm.value)
      .subscribe(
        (equipmentItem: EquipmentItem) => {
          this.toastr.success('equipment.message.update.success', {
            name: equipmentItem.name
          });
          this.modal.close();
        },
        () => this.toastr.error('equipment.message.update.error')
      );
  }

  private getEquipmentItemById(): void {
    if (this.data.id) {
      this.equipmentService
        .findById(this.data.id)
        .subscribe((equipmentItem: EquipmentItem) => {
          this.equipmentForm.patchValue({
            name: equipmentItem.name,
            approvalDate: equipmentItem.approvalDate
          });
        });
    }
  }

  private createEquipmentForm(): FormGroup {
      return this.fb.group({
          name: [''],
          approvalDate: ['']
      });
  }

}
