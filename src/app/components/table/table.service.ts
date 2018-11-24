import * as _ from 'lodash';

import { Column } from '@app/components/table/models';
import { ColumnType } from '@app/shared/enums';
import { IconType } from './models/icon-type';
import { Injectable } from '@angular/core';

@Injectable()
export class TableService {
  private column: Column = new Column();
  private columns: Array<Column> = [];

  constructor() {}

  addColumn(name: string, width?: string) {
    this.column.name = name;
    this.column.width = width ? width : 'auto';
    return this;
  }

  setColumnType(type: ColumnType) {
    this.column.type = type;
    return this;
  }

  addActionForColumn(action: Function) {
    this.column.columnAction = action;
    return this;
  }

  setTranslationPrefix(translatePrefix: string) {
    this.column.translationPrefix = translatePrefix;
    return this;
  }

  addTooltip(tooltip: string) {
    this.column.tooltip = tooltip;
    return this;
  }

  addHeaderTooltip(tooltip: string) {
    this.column.translationTooltip = tooltip;
    return this;
  }

  addTranslation(translation: string) {
    this.column.translation = translation;
    return this;
  }

  addIcon(iconType: IconType, width?: string, iconName?: string) {
    this.column.icon = iconType;
    this.column.width = width ? width : '50px';
    this.column.iconName = iconName;
    return this;
  }

  addIconClass(iconClass: Function | string) {
    if (_.isString(iconClass)) {
      this.column.iconClassStr = iconClass as string;
    } else {
      this.column.iconClass = iconClass as Function;
    }
    return this;
  }

  save() {
    this.columns.push(this.column);
    this.column = new Column();
  }

  getConfig(): Array<Column> {
    return this.columns;
  }

  clearColumns(): void {
    this.columns = [];
  }
}
