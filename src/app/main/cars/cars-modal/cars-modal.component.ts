import * as _ from 'lodash';

import { Car, SelectDictionary } from '@app/shared/model';
import {
  CarWeight,
  ExtinguishingEquipment,
  SpecialCarsPurpose,
  TasksCar
} from '@app/shared/enums';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AppToastrService } from '@app/core/toastr';
import { CarsService } from '../cars.service';
import { EnumService } from '@app/core/enum';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ModalService } from '@app/components/modal';

@Component({
  selector: 'app-cars-modal',
  templateUrl: './cars-modal.component.html',
  styleUrls: ['./cars-modal.component.scss']
})
export class CarsModalComponent implements OnInit {
  carsForm: FormGroup;
  taskCar: Array<SelectDictionary>;
  carWeight: Array<SelectDictionary>;
  specialCarsPurpose: Array<SelectDictionary>;
  extinguishingEquipment: Array<SelectDictionary>;
  selectedCarTask: string;

  constructor(
    private fb: FormBuilder,
    private enumService: EnumService,
    private carsService: CarsService,
    private toastr: AppToastrService,
    private modal: ModalService,
    @Inject(MAT_DIALOG_DATA) private data: { id: number }
  ) {
    this.taskCar = this.enumService.create(TasksCar, 'cars.tasksCar');
    this.carWeight = this.enumService.create(CarWeight, 'cars.weight');
    this.specialCarsPurpose = this.enumService.create(
      SpecialCarsPurpose,
      'cars.purpose'
    );
    this.extinguishingEquipment = this.enumService.create(
      ExtinguishingEquipment,
      'cars.equipment'
    );
  }

  ngOnInit() {
    this.getCarById();
    this.carsForm = this.createCarsForm();
  }

  changeCarTask(): void {
    this.selectedCarTask = this.carsForm.get('taskCar').value;
  }

  save(): void {
    const carObj = this.prepareCarObject();
    if (this.data.id) {
      this.updateCar(carObj);
    } else {
      this.saveCar(carObj);
    }
  }

  private saveCar(carObj: Car): void {
    this.carsService.save(carObj).subscribe(
      (car: Car) => {
        this.toastr.success('cars.message.create.success', {
          mark: car.mark,
          model: car.model
        });
        this.modal.close();
      },
      () => {
        this.toastr.error('cars.message.create.error');
      }
    );
  }

  private updateCar(carObj: Car): void {
    this.carsService
      .update(this.data.id, carObj)
      .subscribe(
        (car: Car) => {
          this.toastr.success('cars.message.update.success', {
            mark: car.mark,
            model: car.model
          });
          this.modal.close();
        },
        () => this.toastr.error('cars.message.update.error')
      );
  }

  private getCarById(): void {
    if (this.data.id) {
      this.carsService
        .findById(this.data.id)
        .subscribe((car: Car) => {
          this.carsForm.patchValue({
            mark: car.mark,
            model: car.model,
            registrationNumber: car.registrationNumber,
            productionDate: car.productionDate,
            operationNumber: car.operationNumber,
            taskCar: car.taskCar,
            carWeight: car.carWeight,
            technicalExaminationDate: car.technicalExaminationDate,
            insuranceDate: car.insuranceDate,
            specialCarsPurpose: car.specialCarsPurpose,
            extinguishingEquipment: car.extinguishingEquipment,
          });
        });
    }
  }

  private prepareCarObject() {
    if (this.carsForm.get('taskCar').value === 'SPECIAL') {
      return _.omit(this.carsForm.value, ['extinguishingEquipment']);
    }
    return _.omit(this.carsForm.value, ['specialCarsPurpose']);
  }

  private createCarsForm(): FormGroup {
    return this.fb.group({
      mark: [''],
      model: [''],
      registrationNumber: [''],
      productionDate: [''],
      operationNumber: [''],
      taskCar: [''],
      carWeight: [''],
      technicalExaminationDate: [''],
      insuranceDate: [''],
      specialCarsPurpose: [''],
      extinguishingEquipment: [''],
      equipmentOrPurpose: [{ value: null, disabled: true }]
    });
  }
}
