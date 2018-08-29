import { Component, OnInit } from '@angular/core';
import { EquipmentItem, PaginationConfig } from '@app/shared/model';

import { Column } from '@app/components/table/models';
import { EquipmentDeleteComponent } from './equipment-delete/equipment-delete.component';
import { EquipmentModalComponent } from './equipment-modal/equipment-modal.component';
import { EquipmentService } from './equipment.service';
import { EquipmentTable } from './equipment.table';
import { ModalService } from '@app/components/modal';
import { TableService } from '@app/components/table';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
  providers: [EquipmentTable, TableService]
})
export class EquipmentComponent implements OnInit {

  tableData: Array<EquipmentItem>;
  tableConfig: Array<Column>;
  paginationConfig: PaginationConfig = new PaginationConfig();

  constructor(private modal: ModalService, private equipmentService: EquipmentService, private equipmentTable: EquipmentTable) {
      this.tableConfig = this.equipmentTable.getConfig();
  }

  ngOnInit() {
    this.loadEquipmen();
  }

  changePage(evt): void {
    this.loadEquipmen({ page: evt.pageIndex + 1 });
  }

  openAddDialog(): void {
    this.modal
      .open(EquipmentModalComponent)
      .beforeClose()
      .subscribe(() => this.loadEquipmen());
  }

  openEditDialog(equipmentItem: EquipmentItem): void {
    this.modal
      .open(EquipmentModalComponent, { id: equipmentItem.id })
      .beforeClose()
      .subscribe(() => this.loadEquipmen());
  }

  openDeleteDialog(equipmentItem: EquipmentItem): void {
    this.modal
      .open(EquipmentDeleteComponent, {
        id: equipmentItem.id,
        name: equipmentItem.name
      })
      .beforeClose()
      .subscribe(() => this.loadEquipmen());
  }

  private loadEquipmen(params: Object = { page: 1 }): void {
    this.equipmentService.findAll(params).subscribe((data: any) => {
      this.paginationConfig.length = +data.body.totalCount;
      this.tableData = data.body.data;
    });
  }

}
