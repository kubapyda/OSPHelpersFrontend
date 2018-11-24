import { Component, OnInit } from '@angular/core';

import { Column } from '@app/components/table/models';
import { CoursesService } from './courses.service';
import { CoursesTable } from './courses.table';
import { TableService } from '@app/components/table';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [CoursesTable, TableService]
})
export class CoursesComponent implements OnInit {

  tableData: Array<any> = [];
  tableConfig: Column[];

  constructor(private tableConfiguration: CoursesTable, private coursesService: CoursesService) { }

  ngOnInit() {
    this.loadCoursesForFirefighters();
    this.tableConfig = this.tableConfiguration.getConfig();
    this.tableConfiguration.setRefreshDataFn(this.loadCoursesForFirefighters.bind(this));
  }

  private loadCoursesForFirefighters(params: Object = { page: 1 }): void {
    this.coursesService.findAll(params).subscribe((data: any) => {
      this.tableData = data.body.data;
    });
  }

}
