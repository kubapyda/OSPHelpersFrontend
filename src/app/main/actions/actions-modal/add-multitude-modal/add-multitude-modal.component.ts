import * as _ from 'lodash';

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CarsService } from '@app/main/cars';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Minimal } from '@app/shared/model';
import { ModalService } from '@app/components/modal';

@Component({
  selector: 'app-add-multitude-modal',
  templateUrl: './add-multitude-modal.component.html',
  styleUrls: ['./add-multitude-modal.component.scss'],
  providers: [CarsService]
})
export class AddMultitudeModalComponent implements OnInit {

  addMultitudeForm: FormGroup;
  cars: Array<Minimal>;

  constructor(
    private fb: FormBuilder,
    private carsService: CarsService,
    private modal: ModalService,
    @Inject(MAT_DIALOG_DATA) public carData: Object) { }

  ngOnInit() {
    this.getMinimalCars();
    this.addMultitudeForm = this.createAddMultitudeForm();
  }

  add() {
    this.modal.close(this.addMultitudeForm.value);
  }

  private getMinimalCars(): void {
    this.carsService.findMinimal().subscribe((cars: Array<Minimal>) => {
      this.cars = cars;
      if (!_.isEmpty(this.carData)) {
        this.setMultitudeForm();
      }
    });
  }

  private setMultitudeForm() {
    this.addMultitudeForm.setValue({
      car: this.carData['car'],
      departureTime: this.carData['departureTime'],
      arrivalTime: this.carData['arrivalTime'],
      completeActivityTime: this.carData['completeActivityTime'],
      returnTime: this.carData['returnTime']
    });
  }

  private createAddMultitudeForm(): FormGroup {
    return this.fb.group({
      car: ['', [Validators.required]],
      departureTime: ['', [Validators.required]],
      arrivalTime: ['', [Validators.required]],
      completeActivityTime: ['', [Validators.required]],
      returnTime: ['', [Validators.required]]
    });
  }

}
