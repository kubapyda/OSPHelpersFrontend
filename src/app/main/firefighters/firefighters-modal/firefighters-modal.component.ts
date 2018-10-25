import * as _ from 'lodash';

import { Component, Inject, OnInit } from '@angular/core';
import { FirefighterType, Gender } from '@app/shared/enums';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppToastrService } from '@app/core/toastr';
import { EnumService } from '@app/core/enum';
import { Firefighter } from '@app/shared/model/firefighters';
import { FirefightersService } from '@app/main/firefighters/firefighters.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ModalService } from '@app/components/modal';
import { SelectDictionary } from '@app/shared/model';
import { validateFieldRequired } from '@app/components/validators';

@Component({
  selector: 'app-firefighters-modal',
  templateUrl: './firefighters-modal.component.html',
  styleUrls: ['./firefighters-modal.component.scss']
})
export class FirefightersModalComponent implements OnInit {
  firefightersForm: FormGroup;
  types: Array<SelectDictionary>;
  genders: Array<SelectDictionary>;
  selectedFirefighterType: string;

  constructor(
    private fb: FormBuilder,
    private firefightersService: FirefightersService,
    private toastr: AppToastrService,
    private modal: ModalService,
    private enumService: EnumService,
    @Inject(MAT_DIALOG_DATA) private data: { id: number }
  ) {}

  ngOnInit() {
    this.getFirefighterById();
    this.firefightersForm = this.createFirefightersForm();
    this.types = this.enumService.create(FirefighterType, 'firefighters.types');
    this.genders = this.enumService.create(Gender, 'firefighters.genders');
  }

  save(): void {
    if (this.data.id) {
      this.updateFirefighter();
    } else {
      this.saveFirefighter();
    }
  }

  createLogin(): void {
    const name = this.firefightersForm.get('name').value;
    const surname = this.firefightersForm.get('surname').value;
    const letterToReplece = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'];
    const replecedLetter = ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z'];
    if (name && surname) {
      let login = `${name[0].toLowerCase()}${surname.toLowerCase()}`;
      for (let i = 0; i < letterToReplece.length; i++) {
        login = login.replace(letterToReplece[i], replecedLetter[i]);
      }
      this.firefightersForm.patchValue({ login: login });
    }
  }

  changeFirefighterType(): void {
    this.selectedFirefighterType = this.firefightersForm.get('type').value;
  }

  private saveFirefighter(): void {
    let firefighterData;
    if (this.firefightersForm.get('type').value === 'JOT') {
      firefighterData = _.assignIn(this.firefightersForm.getRawValue(), this.prepareCourseAndMedicalExaminationEndDate());
    } else {
      firefighterData = _.omit(this.firefightersForm.getRawValue(), ['courseCompletitionDate', 'medicalExaminationDate']);
    }
    this.firefightersService
      .save(firefighterData)
      .subscribe(
        (firefighter: Firefighter) => {
          this.toastr.success('firefighters.msg.create.success', {
            name: `${firefighter.name} ${firefighter.surname}`
          });
          this.modal.close();
        },
        () => this.toastr.error('firefighters.msg.create.error')
      );
  }

  private prepareCourseAndMedicalExaminationEndDate(): Object {
    const courseCompletitionDate = this.firefightersForm.getRawValue().courseCompletitionDate;
    const courseValidityEnd = new Date(
      courseCompletitionDate.getFullYear() + 5,
      courseCompletitionDate.getMonth(),
      courseCompletitionDate.getDate()
    );
    const medicalExaminationDate = this.firefightersForm.getRawValue().medicalExaminationDate;
    const endMedicalExaminationDate = new Date(
      medicalExaminationDate.getFullYear() + 3,
      medicalExaminationDate.getMonth(),
      medicalExaminationDate.getDate()
    );
    return {
      courseValidityEnd: courseValidityEnd,
      endMedicalExaminationDate: endMedicalExaminationDate
    };
  }

  private updateFirefighter(): void {
    this.firefightersService
      .update(this.data.id, this.firefightersForm.getRawValue())
      .subscribe(
        (firefighter: Firefighter) => {
          this.toastr.success('firefighters.msg.update.success', {
            name: `${firefighter.name} ${firefighter.surname}`
          });
          this.modal.close();
        },
        () => this.toastr.error('firefighters.msg.update.error')
      );
  }

  private getFirefighterById(): void {
    if (this.data.id) {
      this.firefightersService
        .findById(this.data.id)
        .subscribe((firefighter: Firefighter) => {
          this.firefightersForm.patchValue({
            name: firefighter.name,
            surname: firefighter.surname,
            login: firefighter.login,
            gender: firefighter.gender,
            courseCompletitionDate: firefighter.courseCompletitionDate,
            medicalExaminationDate: firefighter.medicalExaminationDate,
            birthdayDate: firefighter.birthdayDate,
            entryDate: firefighter.entryDate,
            type: firefighter.type
          });
        });
    }
  }

  private createFirefightersForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      login: [{ value: '', disabled: true }, Validators.required],
      courseCompletitionDate: [null, [validateFieldRequired]],
      medicalExaminationDate: [null, [validateFieldRequired]],
      gender: ['', Validators.required],
      birthdayDate: ['', Validators.required],
      entryDate: ['', Validators.required],
      type: ['', Validators.required]
    }, {
      validator: validateFieldRequired('medicalExaminationDate', 'courseCompletitionDate')
    });
  }
}
