import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppToastrService } from '@app/core/toastr';
import { Column } from '@app/components/table/models';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MedicalExamination } from '@app/shared/model';
import { MedicalExaminationModalTable } from './medical-examination-modal.table';
import { MedicalExaminationService } from './../medical-examination.service';

@Component({
  selector: 'app-medical-examination-modal',
  templateUrl: './medical-examination-modal.component.html',
  styleUrls: ['./medical-examination-modal.component.scss'],
  providers: [MedicalExaminationModalTable]
})
export class MedicalExaminationModalComponent implements OnInit {

  medicalExaminationForm: FormGroup;
  tableConfiguration: Column[];
  tableData: MedicalExamination[];

  constructor(
    private fb: FormBuilder,
    private tableConfig: MedicalExaminationModalTable,
    private medicalExaminationService: MedicalExaminationService,
    private toastr: AppToastrService,
    @Inject(MAT_DIALOG_DATA) private firefighter: { id: number, name: string }
  ) { }

  ngOnInit() {
    this.getAllFirefighterMedicalExamination();
    this.medicalExaminationForm = this.createMedicalExaminationForm();
    this.tableConfiguration = this.tableConfig.getConfig();
  }

  save() {
    const medicalExaminationDate = this.medicalExaminationForm.value.medicalExaminationDate;
    const endMedicalExaminationDate = new Date(
      medicalExaminationDate.getFullYear() + 3,
      medicalExaminationDate.getMonth(),
      medicalExaminationDate.getDate()
    );
    this.medicalExaminationService.createForFirefighter({
      medicalExaminationDate: medicalExaminationDate,
      endMedicalExaminationDate: endMedicalExaminationDate,
      FirefighterId: this.firefighter.id
    }).subscribe((medicalExamination: MedicalExamination) => {
      this.getAllFirefighterMedicalExamination();
      this.medicalExaminationForm.reset();
      this.toastr.success('medicalExamination.msg.create.success', {
        name: this.firefighter.name
      });
    },
    () => this.toastr.error('medicalExamination.msg.create.error'));
  }

  private getAllFirefighterMedicalExamination() {
    this.medicalExaminationService.findByFirefighterId(this.firefighter.id).subscribe((data: MedicalExamination[]) => {
      this.tableData = data;
    });
  }

  private createMedicalExaminationForm(): FormGroup {
    return this.fb.group({
      medicalExaminationDate: ['', [Validators.required]]
    });
  }

}
