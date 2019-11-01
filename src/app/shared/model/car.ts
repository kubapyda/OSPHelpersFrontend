import {
  CarWeight,
  ExtinguishingEquipment,
  SpecialCarsPurpose,
  TasksCar
} from '@app/shared/enums';

export class Car {
  id?: string;
  mark: string;
  model: string;
  registrationNumber: string;
  productionDate: Date;
  operationNumber: string;
  taskCar: TasksCar;
  carWeight: CarWeight;
  technicalExaminationDate: Date;
  insuranceDate: Date;
  specialCarsPurpose: SpecialCarsPurpose;
  extinguishingEquipment: ExtinguishingEquipment;
  waterTankCapacity: number;
  foamTankCapacity: number;
  autopompePerformance: number;
  motopompePerformance: number;
  carType: string;
  carMileage: number;
}
