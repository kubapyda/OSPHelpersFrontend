import { Component, Inject } from '@angular/core';

import { AppToastrService } from '@app/core/toastr';
import { CarsService } from './../cars.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ModalService } from '@app/components/modal';

@Component({
  selector: 'app-cars-delete',
  templateUrl: './cars-delete.component.html',
  styleUrls: ['./cars-delete.component.scss']
})
export class CarsDeleteComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number; name: string },
    private carsService: CarsService,
    private toastr: AppToastrService,
    private modal: ModalService
  ) {}

  removeCar(): void {
    this.carsService.remove(this.data.id).subscribe(
      () => {
        this.toastr.success('cars.message.delete.success', {
          name: this.data.name
        });
        this.modal.close();
      },
      () => this.toastr.error('cars.message.delete.error')
    );
  }

}
