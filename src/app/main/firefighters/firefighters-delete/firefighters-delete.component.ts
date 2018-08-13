import { Component, Inject, OnInit } from '@angular/core';

import { AppToastrService } from '@app/core/toastr';
import { FirefightersService } from '../firefighters.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ModalService } from '@app/components/modal';

@Component({
  selector: 'app-firefighters-delete',
  templateUrl: './firefighters-delete.component.html',
  styleUrls: ['./firefighters-delete.component.scss']
})
export class FirefightersDeleteComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number; name: string },
    private firefightersService: FirefightersService,
    private toastr: AppToastrService,
    private modal: ModalService
  ) {}

  removeFirefighters(): void {
    this.firefightersService.remove(this.data.id).subscribe(
      () => {
        this.toastr.success('firefighters.msg.delete.success', {
          name: this.data.name
        });
        this.modal.close();
      },
      () => this.toastr.error('firefighters.msg.delete.error')
    );
  }
}
