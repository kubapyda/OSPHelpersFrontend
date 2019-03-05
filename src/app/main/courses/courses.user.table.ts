import * as _ from 'lodash';

import { Column } from '@app/components/table/models';
import { ColumnType } from '@app/shared/enums';
import { Injectable } from '@angular/core';
import { TableService } from '@app/components/table';

@Injectable()
export class CoursesUserTable {

  constructor(private table: TableService) {
    // iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // iconRegistry.addSvgIcon(
    //   'check',
    //   sanitizer.bypassSecurityTrustResourceUrl(
    //     '../../../assets/icons/check-solid.svg'
    //   )
    // );
    // iconRegistry.addSvgIcon(
    //   'plus',
    //   sanitizer.bypassSecurityTrustResourceUrl(
    //     '../../../assets/icons/plus-circle-solid.svg'
    //   )
    // );
  }

  getConfig(): Array<Column> {
    this.table
      .addColumn('index')
      .addTranslation('courses.ordinalNumber')
      .save();
    this.table
      .addColumn('courseType')
      .setColumnType(ColumnType.TRANSLATE_TEXT)
      .setTranslationPrefix('courses.kind')
      .addTranslation('courses.kind.name')
      .save();
    this.table
      .addColumn('courseCompletitionDate')
      .setColumnType(ColumnType.DATE)
      .addTranslation('courses.courseCompleting')
      .save();
    this.table
      .addColumn('courseValidityEnd')
      .setColumnType(ColumnType.DATE)
      .addTranslation('courses.applicationDate')
      .save();

    return this.table.getConfig();
  }
}
