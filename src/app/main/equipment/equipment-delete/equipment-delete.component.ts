import { Component, Inject } from '@angular/core';

import { AppToastrService } from '@app/core/toastr';
import { EquipmentService } from './../equipment.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ModalService } from '@app/components/modal';

@Component({
  selector: 'app-equipment-delete',
  templateUrl: './equipment-delete.component.html',
  styleUrls: ['./equipment-delete.component.scss']
})
export class EquipmentDeleteComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number; name: string },
    private equipmentService: EquipmentService,
    private toastr: AppToastrService,
    private modal: ModalService
  ) {}

  removeEquipmentItem(): void {
    this.equipmentService.remove(this.data.id).subscribe(
      () => {
        this.toastr.success('equipment.message.delete.success', {
          name: this.data.name
        });
        this.modal.close();
      },
      () => this.toastr.error('equipment.message.delete.error')
    );
  }

}
