import { Component, OnInit } from '@angular/core';

import { Column } from '@app/components/table/models';
import { CoursesService } from './courses.service';
import { CoursesTable } from './courses.table';
import { CoursesUserTable } from './courses.user.table';
import { Principal } from '@app/core/auth';
import { TableService } from '@app/components/table';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [CoursesTable, CoursesUserTable, TableService]
})
export class CoursesComponent implements OnInit {

  tableData: Array<any> = [];
  tableConfig: Column[];

  constructor(
    private tableConfiguration: CoursesTable,
    private coursesService: CoursesService,
    private principal: Principal,
    private tableUserConfiguration: CoursesUserTable
  ) { }

  ngOnInit() {
    if (this.principal.hasPermision('ADMIN')) {
      this.loadCoursesForFirefighters();
      this.tableConfig = this.tableConfiguration.getConfig();
      this.tableConfiguration.setRefreshDataFn(this.loadCoursesForFirefighters.bind(this));
    } else {
      this.tableConfig = this.tableUserConfiguration.getConfig();
      this.loadFirefighterCourses();
    }
  }

  private loadCoursesForFirefighters(params: Object = { page: 1 }): void {
    this.coursesService.findAll(params).subscribe((data: any) => {
      this.tableData = data.body.data;
    });
  }

  private loadFirefighterCourses(): void {
    this.coursesService.findFirefighterCourses(this.principal.getUserId()).subscribe((data: any) => {
      this.tableData = data;
    });
  }

}
