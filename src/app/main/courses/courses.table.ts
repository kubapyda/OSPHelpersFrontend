import * as _ from 'lodash';

import { Column, IconType } from '@app/components/table/models';
import { ColumnType, CourseIconType } from '@app/shared/enums';

import { AddCourseComponent } from './add-course/add-course.component';
import { DomSanitizer } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { ModalService } from '@app/components/modal';
import { RefreshAndHistoryCourseComponent } from './refresh-and-history-course/refresh-and-history-course.component';
import { TableService } from '@app/components/table';

@Injectable()
export class CoursesTable {

  refreshData: Function;

  constructor(private table: TableService, private modal: ModalService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'check',
      sanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/icons/check-solid.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'plus',
      sanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/icons/plus-circle-solid.svg'
      )
    );
  }

  setRefreshDataFn(fn: Function) {
    this.refreshData = fn;
  }

  getConfig(): Array<Column> {
    this.table
      .addColumn('add')
      .setColumnType(ColumnType.ICON)
      .addIconClass('edit-icon')
      .addIcon(IconType.CUSTOM, '75px', 'plus')
      .addActionForColumn((data) => {
        this.modal
          .open(AddCourseComponent, { id: data.id, courses: _.keys(_.omit(data, ['id', 'name'])) })
          .beforeClose()
          .subscribe(() => this.refreshData());
      })
      .save();
    this.table
      .addColumn('name')
      .addTranslation('courses.name')
      .save();
    this.table
      .addColumn('BASIC')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.CUSTOM, '80px', 'check')
      .addIconClass(this.setCoursesIconClass)
      .addTranslation('courses.kind.BASIC')
      .addActionForColumn(this.openRefreshAndHistoryOfCourseModal.bind(this))
      .save();
    this.table
      .addColumn('TECHNICAL_RESCUE')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.CUSTOM, '80px', 'check')
      .addIconClass(this.setCoursesIconClass)
      .addTranslation('courses.kind.TechnicalRescueShortcut')
      .addHeaderTooltip('courses.kind.TECHNICAL_RESCUE')
      .addActionForColumn(this.openRefreshAndHistoryOfCourseModal.bind(this))
      .save();
    this.table
      .addColumn('FIRST_AID')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.CUSTOM, '80px', 'check')
      .addIconClass(this.setCoursesIconClass)
      .addTranslation('courses.kind.FirstAidShortcut')
      .addHeaderTooltip('courses.kind.FIRST_AID')
      .addActionForColumn(this.openRefreshAndHistoryOfCourseModal.bind(this))
      .save();
    this.table
      .addColumn('WATER_RESCUE')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.CUSTOM, '80px', 'check')
      .addIconClass(this.setCoursesIconClass)
      .addTranslation('courses.kind.WaterRescueScortcut')
      .addHeaderTooltip('courses.kind.WATER_RESCUE')
      .addActionForColumn(this.openRefreshAndHistoryOfCourseModal.bind(this))
      .save();
    this.table
      .addColumn('HARDWARE_CONSERVATOR')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.CUSTOM, '80px', 'check')
      .addIconClass(this.setCoursesIconClass)
      .addTranslation('courses.kind.HardwareConservatorShortcut')
      .addHeaderTooltip('courses.kind.HARDWARE_CONSERVATOR')
      .addActionForColumn(this.openRefreshAndHistoryOfCourseModal.bind(this))
      .save();
    this.table
      .addColumn('CHEMICAL_AND_ECOLOGICAL_RESCUE')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.CUSTOM, '80px', 'check')
      .addIconClass(this.setCoursesIconClass)
      .addTranslation('courses.kind.ChemicalAndEcologicalRescueShortcut')
      .addHeaderTooltip('courses.kind.CHEMICAL_AND_ECOLOGICAL_RESCUE')
      .addActionForColumn(this.openRefreshAndHistoryOfCourseModal.bind(this))
      .save();
    this.table
      .addColumn('ALTITUDE_RESCUE')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.CUSTOM, '80px', 'check')
      .addIconClass(this.setCoursesIconClass)
      .addTranslation('courses.kind.AltitudeRescueShortcut')
      .addHeaderTooltip('courses.kind.ALTITUDE_RESCUE')
      .addActionForColumn(this.openRefreshAndHistoryOfCourseModal.bind(this))
      .save();
    this.table
      .addColumn('SERVICE_CAR_WITH_LIFT')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.CUSTOM, '80px', 'check')
      .addIconClass(this.setCoursesIconClass)
      .addTranslation('courses.kind.ServiceCarWithLiftShortcut')
      .addHeaderTooltip('courses.kind.SERVICE_CAR_WITH_LIFT')
      .addActionForColumn(this.openRefreshAndHistoryOfCourseModal.bind(this))
      .save();
    this.table
      .addColumn('SERVICE_CAR_WITH_LADY')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.CUSTOM, '80px', 'check')
      .addIconClass(this.setCoursesIconClass)
      .addTranslation('courses.kind.ServiceCarWithLadyShortcut')
      .addHeaderTooltip('courses.kind.SERVICE_CAR_WITH_LADY')
      .addActionForColumn(this.openRefreshAndHistoryOfCourseModal.bind(this))
      .save();
    this.table
      .addColumn('SEARCH_AND_RESCUE')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.CUSTOM, '80px', 'check')
      .addIconClass(this.setCoursesIconClass)
      .addTranslation('courses.kind.SearchAndRescueShortcut')
      .addHeaderTooltip('courses.kind.SEARCH_AND_RESCUE')
      .addActionForColumn(this.openRefreshAndHistoryOfCourseModal.bind(this))
      .save();
    this.table
      .addColumn('COMMANDERS')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.CUSTOM, '80px', 'check')
      .addIconClass(this.setCoursesIconClass)
      .addTranslation('courses.kind.CommandersShortcut')
      .addHeaderTooltip('courses.kind.COMMANDERS')
      .addActionForColumn(this.openRefreshAndHistoryOfCourseModal.bind(this))
      .save();
    this.table
      .addColumn('WARDROBES')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.CUSTOM, '80px', 'check')
      .addIconClass(this.setCoursesIconClass)
      .addTranslation('courses.kind.WardrobesShortcut')
      .addHeaderTooltip('courses.kind.WARDROBES')
      .addActionForColumn(this.openRefreshAndHistoryOfCourseModal.bind(this))
      .save();
    this.table
      .addColumn('COMMUNES_COMMANDER')
      .setColumnType(ColumnType.ICON)
      .addIcon(IconType.CUSTOM, '80px', 'check')
      .addIconClass(this.setCoursesIconClass)
      .addTranslation('courses.kind.CommunmesCommanderShortcut')
      .addHeaderTooltip('courses.kind.COMMUNES_COMMANDER')
      .addActionForColumn(this.openRefreshAndHistoryOfCourseModal.bind(this))
      .save();

    return this.table.getConfig();
  }

  setCoursesIconClass(courseIconType: CourseIconType) {
    if (courseIconType) {
      return courseIconType.toLowerCase().split('_').join('-');
    }
    return 'non-course';
  }

  openRefreshAndHistoryOfCourseModal(element: any, name: string) {
    this.modal.open(RefreshAndHistoryCourseComponent, {
      id: element.id,
      course: name
    })
    .beforeClose()
    .subscribe(() => this.refreshData());
  }
}
