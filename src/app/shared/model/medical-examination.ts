export class MedicalExamination {
  id?: string;
  medicalExaminationDate: Date;
  endMedicalExaminationDate: Date;
  FirefighterId?: number;
  firefighter?: { id: number, name: string};
}
