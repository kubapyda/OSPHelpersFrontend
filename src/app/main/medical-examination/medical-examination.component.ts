import { Component, OnInit } from '@angular/core';
import { MedicalExamination, PaginationConfig } from '@app/shared/model';

import { Column } from '@app/components/table/models';
import { MedicalExaminationService } from './medical-examination.service';
import { MedicalExaminationTable } from './medical-examination.table';
import { TableService } from '@app/components/table';

@Component({
  selector: 'app-medical-examination',
  templateUrl: './medical-examination.component.html',
  styleUrls: ['./medical-examination.component.scss'],
  providers: [MedicalExaminationTable, TableService]
})
export class MedicalExaminationComponent implements OnInit {

  tableConfiguration: Column[];
  tableData: MedicalExamination[];
  paginationConfig: PaginationConfig = new PaginationConfig();

  constructor(private tableConfig: MedicalExaminationTable, private medicalExaminationService: MedicalExaminationService) { }

  ngOnInit() {
    this.tableConfiguration = this.tableConfig.getConfig(this.loadMedicalExaminationForFirefighters.bind(this));
    this.loadMedicalExaminationForFirefighters();
  }

  changePage(evt) {
    this.loadMedicalExaminationForFirefighters({ page: evt.pageIndex + 1 });
  }

  private loadMedicalExaminationForFirefighters(params: Object = { page: 1 }): void {
    this.medicalExaminationService.findAll(params).subscribe((data: any) => {
      this.paginationConfig.length = +data.body.totalCount;
      this.tableData = data.body.data;
    });
  }
}
