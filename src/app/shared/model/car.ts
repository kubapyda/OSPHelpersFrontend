import {
  CarWeight,
  ExtinguishingEquipment,
  SpecialCarsPurpose,
  TasksCar
} from '@app/shared/enums';

export class Car {
  mark: string;
  model: string;
  registrationNumber: string;
  productionDate: Date;
  operaionNumber: string;
  taskCar: TasksCar;
  carWeight: CarWeight;
  technicalExaminationDate: Date;
  insuranceDate: Date;
  specialCarsPurpose: SpecialCarsPurpose;
  extinguishingEquipment: ExtinguishingEquipment;
}
