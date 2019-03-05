import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Minimal, SelectDictionary } from '@app/shared/model';

import { ActionsModalTable } from './actions-modal.table';
import { ActionsService } from './../actions.service';
import { ActionsType } from '@app/shared/enums';
import { AddFirefightersComponent } from './add-firefighters/add-firefighters.component';
import { AddMultitudeModalComponent } from './add-multitude-modal/add-multitude-modal.component';
import { AddUsedEquipmentItemsComponent } from './add-used-equipment-items/add-used-equipment-items.component';
import { AppToastrService } from '@app/core/toastr';
import { Column } from '@app/components/table/models';
import { EnumService } from '@app/core/enum';
import { ModalService } from '@app/components/modal';

@Component({
  selector: 'app-actions-modal',
  templateUrl: './actions-modal.component.html',
  styleUrls: ['./actions-modal.component.scss'],
  providers: [ActionsModalTable]
})
export class ActionsModalComponent implements OnInit {

  actionForm: FormGroup;
  actionsType: Array<SelectDictionary>;
  cars: Array<Object> = [];
  firefighters: Array<Minimal> = [];
  equipmentItems: Array<Minimal> = [];
  equipmentItemsTableConfig: Array<Column>;
  carsTableConfig: Array<Column>;
  firefightersTableConfig: Array<Column>;

  constructor(
    private fb: FormBuilder,
    private modal: ModalService,
    private enumService: EnumService,
    private toastr: AppToastrService,
    private actionsService: ActionsService,
    private actionsModalTable: ActionsModalTable
  ) {}

  ngOnInit() {
    this.actionForm = this.createActionForm();
    this.actionsType = this.enumService.create(ActionsType, 'actions.actionsType');
    this.carsTableConfig = this.actionsModalTable.getCarsConfig();
    this.firefightersTableConfig = this.actionsModalTable.getFirefightersConfig();
    this.equipmentItemsTableConfig = this.actionsModalTable.getEquipmentItemsConfig();
  }

  save(): void {
    if (this.validateData()) {
      const data = {
        equipmentItems: this.equipmentItems,
        cars: this.cars,
        firefighters: this.firefighters
      };
      const dataToSend = _.assignIn(this.actionForm.value, data);
      this.actionsService.save(dataToSend).subscribe(actionData => {
        this.toastr.success('actions.messages.success', { id: actionData.id });
        this.modal.close();
      }, () => {
        this.toastr.error('actions.messages.error');
      });
    }
  }

  deleteMultitude(car: any) {
    this.cars.splice(_.findIndex(this.cars, car), 1);
  }

  openCheckUsedEquipmentItems(): void {
    this.modal.open(AddUsedEquipmentItemsComponent, this.equipmentItems, { width: '500px' })
        .afterClosed().subscribe((data: Array<Minimal>) => {
          if (data) {
            this.equipmentItems = data;
          }
        });
  }

  openAddEditMultitudeModal(car: any = {}): void {
    this.modal
        .open(AddMultitudeModalComponent, car, { width: '500px' })
        .afterClosed().subscribe((data: Object) => {
            if (data) {
              const multitude = _.cloneDeep(this.cars);
              multitude.push(data);
              this.cars = multitude;
            }
        });
  }

  openAddOrChangeFirefightersModal(): void {
    const data = { cars: this.cars };
    if (this.firefighters.length) {
      _.assignIn(data, { firefighters: this.firefighters });
    }
    this.modal
        .open(AddFirefightersComponent, data, { width: '500px' })
        .afterClosed().subscribe((firefighter: Array<Minimal>) => {
            if (firefighter) {
                this.firefighters = firefighter;
            }
        });
  }

  private validateData() {
    let isError = true;
    if (!_.size(this.cars)) {
      isError = false;
      this.toastr.error('actions.validation.noCars');
    }
    if (!_.size(this.firefighters)) {
      isError = false;
      this.toastr.error('actions.validation.noFirefighters');
    }
    return isError;
  }

  private createActionForm(): FormGroup {
      return this.fb.group({
          date: ['', [Validators.required]],
          time: ['', [Validators.required]],
          kind: ['', [Validators.required]],
          eventAddress: ['', [Validators.required]]
      });
  }

}
