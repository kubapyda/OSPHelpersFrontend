import { Component, OnInit } from '@angular/core';

import { CarsModalComponent } from './cars-modal/cars-modal.component';
import { ModalService } from '@app/components/modal';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  constructor(private modal: ModalService) {}

  ngOnInit() {}

  openAddDialog(): void {
    this.modal.open(CarsModalComponent);
  }
}
