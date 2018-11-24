import * as _ from 'lodash';

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppToastrService } from '@app/core/toastr';
import { CourseKind } from '@app/shared/enums';
import { CoursesService } from './../courses.service';
import { EnumService } from '@app/core/enum';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ModalService } from '@app/components/modal';
import { SelectDictionary } from '@app/shared/model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  courseKind: SelectDictionary[];
  courseForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number, courses: string[] },
    private coursesService: CoursesService,
    private toastr: AppToastrService,
    private enumService: EnumService,
    private fb: FormBuilder,
    private modal: ModalService
  ) { }

  ngOnInit() {
    this.courseForm = this.createCourseForm();
    this.courseKind = this.enumService.create(_.omit(CourseKind, this.data.courses), 'courses.kind');
  }

  save() {
    const course = _.assign(this.courseForm.value, { FirefighterId: this.data.id });
    this.coursesService.save(course).subscribe(() => {
      this.toastr.success('courses.message.success');
      this.modal.close();
    }, () => {
      this.toastr.error('courses.message.error');
    });
  }

  private createCourseForm(): FormGroup {
    return this.fb.group({
      courseType: [null, [Validators.required]],
      courseCompletitionDate: [null, [Validators.required]],
      courseValidityEnd: [null]
    });
  }

}
