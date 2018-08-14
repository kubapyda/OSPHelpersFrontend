import { Car, SelectDictionary } from '@app/shared/model';
import {
  CarWeight,
  ExtinguishingEquipment,
  SpecialCarsPurpose,
  TasksCar
} from '@app/shared/enums';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AppToastrService } from '@app/core/toastr';
import { CarsService } from '../cars.service';
import { EnumService } from '@app/core/enum';
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
    private modal: ModalService
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
    this.carsForm = this.createCarsForm();
  }

  save(): void {
    this.carsService.save(this.carsForm.value).subscribe(
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

  changeCarTask(): void {
    this.selectedCarTask = this.carsForm.get('taskCar').value;
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
