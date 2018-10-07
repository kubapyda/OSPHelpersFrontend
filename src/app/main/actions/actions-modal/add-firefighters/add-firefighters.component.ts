import * as _ from 'lodash';

import { Component, Inject, OnInit } from '@angular/core';

import { FirefighterType } from '@app/shared/enums';
import { FirefightersService } from '@app/main/firefighters';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Minimal } from '@app/shared/model';
import { ModalService } from '@app/components/modal';

@Component({
  selector: 'app-add-firefighters',
  templateUrl: './add-firefighters.component.html',
  styleUrls: ['./add-firefighters.component.scss'],
  providers: [FirefightersService]
})
export class AddFirefightersComponent implements OnInit {

  firefighters: Array<Minimal>;
  checkedFirefighters: Array<Array<Object>> = [];

  constructor(
    private firefighterService: FirefightersService,
    private modal: ModalService,
    @Inject(MAT_DIALOG_DATA) public data: { cars: Array<Object>, firefighters?: Array<Object> },
  ) { }

  ngOnInit() {
    this.loadMinimalFirefighters();
  }

  selectFirefighter(firefighter: Minimal, rowIdx: number, colIdx: number) {
      this.checkedFirefighters[colIdx][rowIdx]['multitude'] = firefighter;
      for (let i = 0; i < _.size(this.data.cars); i++) {
        if (colIdx === i) {
          continue;
        }
        this.checkedFirefighters[i][rowIdx]['checked'] = false;
      }
  }

  add() {
    let preparedFirefighters = [];
    _.forEach(this.checkedFirefighters, (checked: Array<Minimal>, idx: number) => {
      preparedFirefighters =  preparedFirefighters.concat(_.map(_.filter(checked, 'checked'), (element: Object) => {
        return _.assign(element['multitude'], _.pick(this.data.cars[idx], ['car']));
      }));
    });
    this.modal.close(preparedFirefighters);
  }

  private loadMinimalFirefighters() {
    this.firefighterService.findMinimal(FirefighterType.JOT).subscribe((data: Array<Minimal>) => {
      this.firefighters = data;
      this.createModelForCheckboxes();
      this.prepareDataForEditFirefighteresList();
    });
  }

  private createModelForCheckboxes() {
    let arrModel;
    for (let j = 0; j < _.size(this.data.cars); j++) {
      arrModel = [];
      for (let i = 0; i < _.size(this.firefighters); i++) {
          arrModel.push({
            checked: false,
            multitude: null
          });
      }
      this.checkedFirefighters.push(arrModel);
    }
  }

  private prepareDataForEditFirefighteresList() {
    let firefighterIdx;
    let carIdx;
    _.forEach(this.data.firefighters, (firefighter: Object) => {
      firefighterIdx = _.findIndex(this.firefighters, { value: firefighter['value'] });
      carIdx = _.findIndex(this.data.cars, { car: firefighter['car'] });
      this.checkedFirefighters[carIdx][firefighterIdx] = {
        checked: true,
        multitude: firefighter
      };
    });
  }

}
