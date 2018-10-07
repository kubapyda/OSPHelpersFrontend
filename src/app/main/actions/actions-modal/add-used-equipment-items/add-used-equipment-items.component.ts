import * as _ from 'lodash';

import { Component, Inject, OnInit } from '@angular/core';

import { EquipmentService } from '@app/main/equipment/equipment.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Minimal } from '@app/shared/model';
import { ModalService } from '@app/components/modal';

@Component({
  selector: 'app-add-used-equipment-items',
  templateUrl: './add-used-equipment-items.component.html',
  styleUrls: ['./add-used-equipment-items.component.scss'],
  providers: [EquipmentService]
})
export class AddUsedEquipmentItemsComponent implements OnInit {

  equipmentItems: Array<Minimal>;
  checkboxesModel: Array<boolean> = [];
  usedEquipmentItems: Array<Minimal> = [];

  constructor(
    private equipmentService: EquipmentService,
    private modal: ModalService,
    @Inject(MAT_DIALOG_DATA) public selectedEquipment: Array<Minimal>
  ) { }

  ngOnInit() {
    this.loadMinimaEquipmentItems();
  }

  add() {
    this.modal.close(this.usedEquipmentItems);
  }

  selectEquipmentItem(equipmentItem: Minimal) {
    const elIdx = _.findIndex(this.usedEquipmentItems, { id: equipmentItem.id });
    if (elIdx === -1) {
      this.usedEquipmentItems.push(equipmentItem);
    } else {
      this.usedEquipmentItems.splice(elIdx, 1);
    }
  }


  private loadMinimaEquipmentItems() {
      this.equipmentService.findMinimal().subscribe((equipmentItems: Array<Minimal>) => {
        this.equipmentItems = equipmentItems;
        this.createModelForCheckboxes();
      });
  }

  private createModelForCheckboxes() {
      for (let i = 0; i < _.size(this.equipmentItems); i++) {
          this.checkboxesModel.push(false);
      }
      this.usedEquipmentItems = _.cloneDeep(this.selectedEquipment);
      if (_.size(this.selectedEquipment)) {
        for (let i = 0; i < _.size(this.selectedEquipment); i++) {
          const idx = _.findIndex(this.equipmentItems, { id: this.selectedEquipment[i].id });
          this.checkboxesModel[idx] = true;
        }
      }
  }

}
