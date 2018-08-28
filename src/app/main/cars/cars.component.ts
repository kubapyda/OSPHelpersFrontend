import { Car, PaginationConfig } from '@app/shared/model';
import { Component, OnInit } from '@angular/core';

import { CarsDeleteComponent } from '@app/main/cars/cars-delete/cars-delete.component';
import { CarsModalComponent } from './cars-modal/cars-modal.component';
import { CarsService } from './cars.service';
import { CarsTable } from './cars.table';
import { Column } from '@app/components/table/models';
import { ModalService } from '@app/components/modal';
import { TableService } from '@app/components/table';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  providers: [CarsTable, TableService]
})
export class CarsComponent implements OnInit {
  tableData: Array<Car>;
  tableConfig: Array<Column>;
  paginationConfig: PaginationConfig = new PaginationConfig();

  constructor(private modal: ModalService, private carsService: CarsService, private carsTable: CarsTable) {
    this.tableConfig = this.carsTable.getConfig();
  }

  ngOnInit() {
    this.loadCars();
  }

  changePage(evt): void {
    this.loadCars({ page: evt.pageIndex + 1 });
  }

  openAddDialog(): void {
    this.modal
      .open(CarsModalComponent)
      .beforeClose()
      .subscribe(() => this.loadCars());
  }

  openEditDialog(car: Car): void {
    this.modal
      .open(CarsModalComponent, { id: car.id })
      .beforeClose()
      .subscribe(() => this.loadCars());
  }

  openDeleteDialog(car: Car): void {
    this.modal
      .open(CarsDeleteComponent, {
        id: car.id,
        name: `${car.mark} ${car.model}`
      })
      .beforeClose()
      .subscribe(() => this.loadCars());
  }

  private loadCars(params: Object = { page: 1 }): void {
    this.carsService.findAll(params).subscribe((data: any) => {
      this.paginationConfig.length = +data.body.totalCount;
      this.tableData = data.body.data;
    });
  }
}
