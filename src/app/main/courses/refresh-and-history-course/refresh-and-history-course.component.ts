import * as _ from 'lodash';

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppToastrService } from './../../../core/toastr/app-toastr.service';
import { Column } from '@app/components/table/models';
import { CoursesService } from '../courses.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ModalService } from '@app/components/modal';
import { RefreshAndHistoryCourseTable } from './refresh-and-history-course.table';

@Component({
  selector: 'app-refresh-and-history-course',
  templateUrl: './refresh-and-history-course.component.html',
  styleUrls: ['./refresh-and-history-course.component.scss'],
  providers: [RefreshAndHistoryCourseTable]
})
export class RefreshAndHistoryCourseComponent implements OnInit {

  refreshCourseForm: FormGroup;
  tableConfiguration: Column[];
  tableData: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { id: number, course: string },
    private coursesService: CoursesService,
    private fb: FormBuilder,
    private tableConfig: RefreshAndHistoryCourseTable,
    private toastr: AppToastrService
  ) { }

  ngOnInit() {
    this.loadHistoryOfCourse();
    this.refreshCourseForm = this.createRefreshCourseForm();
    this.tableConfiguration = this.tableConfig.getConfig();
  }

  save() {
    const course = _.assign(_.omit(this.refreshCourseForm.value, ['id']), { FirefighterId: this.data.id, courseType: this.data.course});
    this.coursesService.save(course).subscribe(() => {
      this.toastr.success('courses.message.refresh.success');
      this.loadHistoryOfCourse();
    }, () => {
      this.toastr.error('courses.message.refresh.error');
    });
  }

  private loadHistoryOfCourse() {
    this.coursesService.findFirefighterCourse(this.data.id, this.data.course).subscribe((data: any) => {
      this.tableData = data;
    });
  }

  private createRefreshCourseForm(): FormGroup {
    return this.fb.group({
      courseCompletitionDate: [null, [Validators.required]],
      courseValidityEnd: [null]
    });
  }

}
