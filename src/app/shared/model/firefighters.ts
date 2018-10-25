import { FirefighterType, Gender } from '@app/shared/enums';

export class Firefighter {
  id?: number;
  name: string;
  surname: string;
  gender: Gender;
  login: string;
  password?: string;
  courseCompletitionDate: Date;
  medicalExaminationDate: Date;
  birthdayDate: Date;
  entryDate: Date;
  type: FirefighterType;
  createdAt?: Date;
  updatedAt?: Date;
}
