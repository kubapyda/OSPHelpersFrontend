import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-firefighters-modal',
  templateUrl: './firefighters-modal.component.html',
  styleUrls: ['./firefighters-modal.component.scss']
})
export class FirefightersModalComponent implements OnInit {
  firefightersForm: FormGroup;
  types: Array<{ value: string; nlsCode: string }> = [
    {
      value: 'MEMBER',
      nlsCode: 'firefighters.types.MEMBER'
    },
    {
      value: 'JOT',
      nlsCode: 'firefighters.types.JOT'
    },
    {
      value: 'MDP',
      nlsCode: 'firefighters.types.MDP'
    }
  ];

  genders: Array<{ value: string; nlsCode: string }> = [
    {
      value: 'MAN',
      nlsCode: 'firefighters.genders.MAN'
    },
    {
      value: 'WOMAN',
      nlsCode: 'firefighters.genders.WOMAN'
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.firefightersForm = this.createFirefightersForm();
  }

  save(): void {
    console.log(this.firefightersForm.getRawValue());
  }

  createLogin(): void {
    const name = this.firefightersForm.get('name').value;
    const surname = this.firefightersForm.get('surname').value;
    const letterToReplece = [
      /ą/g,
      /ć/g,
      /ę/g,
      /ł/g,
      /ń/g,
      /ó/g,
      /ś/g,
      /ź/g,
      /ż/g
    ];
    const replecedLetter = ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z'];
    if (name && surname) {
      let login = `${name[0].toLowerCase()}${surname.toLowerCase()}`;
      for (let i = 0; i < letterToReplece.length; i++) {
        login = login.replace(letterToReplece[i], replecedLetter[i]);
      }
      this.firefightersForm.patchValue({ login: login });
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
      type: ['', Validators.required]
    });
  }
}
