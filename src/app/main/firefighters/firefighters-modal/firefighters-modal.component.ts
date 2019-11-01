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

@Component({
  selector: 'app-firefighters-modal',
  templateUrl: './firefighters-modal.component.html',
  styleUrls: ['./firefighters-modal.component.scss']
})
export class FirefightersModalComponent implements OnInit {
  firefightersForm: FormGroup;
  types: Array<SelectDictionary>;
  genders: Array<SelectDictionary>;

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

  private saveFirefighter(): void {
    const firefighterData = this.firefightersForm.getRawValue();
    firefighterData.role = firefighterData.role ? 'ADMIN' : 'USER';
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


  private updateFirefighter(): void {
    const firefighterData = this.firefightersForm.getRawValue();
    firefighterData.role = firefighterData.role ? 'ADMIN' : 'USER';
    this.firefightersService
      .update(this.data.id, firefighterData)
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
            birthdayDate: firefighter.birthdayDate,
            entryDate: firefighter.entryDate,
            type: firefighter.type,
            role: firefighter.role === 'ADMIN'
          });
        });
    }
  }

  private createFirefightersForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      login: [{ value: '', disabled: true }, Validators.required],
      gender: ['', Validators.required],
      birthdayDate: ['', Validators.required],
      entryDate: ['', Validators.required],
      type: ['', Validators.required],
      role: [false]
    });
  }
}
