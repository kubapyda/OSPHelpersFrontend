import * as _ from 'lodash';

import { Car, SelectDictionary } from '@app/shared/model';
import {
  CarWeight,
  ExtinguishingEquipment,
  SpecialCarsPurpose,
  TasksCar
} from '@app/shared/enums';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  selectEdextinguishingEquipment: string;

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

  changeExtinguishingEquipment(): void {
    this.selectEdextinguishingEquipment = this.carsForm.get('extinguishingEquipment').value;
  }

  save(): void {
    if (this.data.id) {
      this.updateCar(this.carsForm.value);
    } else {
      this.saveCar(this.carsForm.value);
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
            waterTankCapacity: car.waterTankCapacity,
            foamTankCapacity: car.foamTankCapacity,
            autopompePerformance: car.autopompePerformance,
            motopompePerformance: car.motopompePerformance,
            carType: car.carType,
            carMileage: car.carMileage
          });
          this.changeExtinguishingEquipment();
        });
    }
  }

  private createCarsForm(): FormGroup {
    return this.fb.group({
      mark: ['', [Validators.required]],
      model: ['', [Validators.required]],
      registrationNumber: ['', [Validators.required]],
      productionDate: ['', [Validators.required]],
      operationNumber: ['', [Validators.required]],
      taskCar: ['', [Validators.required]],
      carWeight: ['', [Validators.required]],
      technicalExaminationDate: [''],
      insuranceDate: [''],
      specialCarsPurpose: [null],
      extinguishingEquipment: [null],
      equipmentOrPurpose: [{ value: null, disabled: true }],
      waterTankCapacity: ['', [Validators.required]],
      foamTankCapacity: ['', [Validators.required]],
      autopompeOrMotopompePerformance: [{ value: null, disabled: true }],
      autopompePerformance: [null],
      motopompePerformance: [null],
      carType: ['', [Validators.required]],
      carMileage: ['']
    });
  }
}
