import * as _ from 'lodash';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { IconType } from './models/icon-type';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('dataSource') dataSource;
  @Input('config') tableConfig;
  @Output('editAction') editFn: EventEmitter<any> = new EventEmitter<any>();
  @Output('deleteAction') deleteFn: EventEmitter<any> = new EventEmitter<any>();
  displayedColumns: Array<string>;
  iconTypes = IconType;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('./../../../assets/icons/trash-solid.svg'));
    iconRegistry.addSvgIcon('edit', sanitizer.bypassSecurityTrustResourceUrl('./../../../assets/icons/edit-solid.svg'));
  }

  ngOnInit() {
    this.displayedColumns = this.createDisplayedColumns();
  }

  onEditAction(): void {
    this.editFn.emit();
  }

  onDeleteAction(): void {
    this.deleteFn.emit();
  }

  isIcon(icon: IconType | undefined): boolean {
    return _.isNil(icon);
  }

  private createDisplayedColumns(): Array<string> {
    return this.tableConfig.map((col) => {
      return col.name;
    });
  }
}
