import * as moment from 'moment';

import { Component, OnInit } from '@angular/core';
import { MedicalExamination, PaginationConfig } from '@app/shared/model';

import { Column } from '@app/components/table/models';
import { MedicalExaminationModalTable } from './medical-examination-modal/medical-examination-modal.table';
import { MedicalExaminationService } from './medical-examination.service';
import { MedicalExaminationTable } from './medical-examination.table';
import { Principal } from '@app/core/auth';
import { TableService } from '@app/components/table';

@Component({
  selector: 'app-medical-examination',
  templateUrl: './medical-examination.component.html',
  styleUrls: ['./medical-examination.component.scss'],
  providers: [MedicalExaminationTable, MedicalExaminationModalTable, TableService]
})
export class MedicalExaminationComponent implements OnInit {

  tableConfiguration: Column[];
  tableData: MedicalExamination[];
  paginationConfig: PaginationConfig = new PaginationConfig();
  firefighterEndDate: { isActual: boolean, to: string, remained: string } = {
    isActual: false,
    to: '',
    remained: ''
  };

  constructor(
    private tableConfig: MedicalExaminationTable,
    private tableUserConfig: MedicalExaminationModalTable,
    private medicalExaminationService: MedicalExaminationService,
    private principal: Principal
  ) { }

  ngOnInit() {
    if (this.principal.hasPermision('ADMIN')) {
      this.tableConfiguration = this.tableConfig.getConfig(this.loadMedicalExaminationForFirefighters.bind(this));
      this.loadMedicalExaminationForFirefighters();
    } else {
      this.tableConfiguration = this.tableUserConfig.getConfig();
      this.loadMedicalExaminationForFirefighterById();
    }
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

  private loadMedicalExaminationForFirefighterById(): void {
    this.medicalExaminationService.findByFirefighterId(this.principal.getUserId()).subscribe((data: MedicalExamination[]) => {
      this.tableData = data;
      this.getMedicalExaminationEndDate();
    });
  }

  private getMedicalExaminationEndDate() {
    const endDate = this.tableData.reduce((medicalExaminationFirst: MedicalExamination, medicalExaminationSecond: MedicalExamination) => {
      return medicalExaminationFirst.endMedicalExaminationDate > medicalExaminationSecond.endMedicalExaminationDate
        ? medicalExaminationFirst
        : medicalExaminationSecond;
    });
    this.firefighterEndDate = {
      isActual: moment(endDate.endMedicalExaminationDate).diff(moment()) > 0,
      to: moment(endDate.endMedicalExaminationDate).format('DD-MM-YYYY'),
      remained: moment().to(moment(endDate.endMedicalExaminationDate))
    };
  }
}
