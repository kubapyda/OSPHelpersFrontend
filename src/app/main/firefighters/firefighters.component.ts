import { Component, OnInit } from '@angular/core';

import { Column } from '@app/components/table/models';
import { Firefighter } from '@app/shared/model';
import { IconType } from '@app/components/table/models';
import { TableService } from '@app/components/table';

const ELEMENT_DATA: Firefighter[] = [
  { id: 1, name: 'Konrad', surname: 'Mazurkiewicz', birthdayDate: '25/10/1963', entryDate: '13/02/1991', type: 'JOT' },
  { id: 2, name: 'Paweł', surname: 'Witek', birthdayDate: '01/09/1966', entryDate: '25/10/1999', type: 'JOT' },
  { id: 3, name: 'Krystian', surname: 'Stelmach', birthdayDate: '25/10/1963', entryDate: '04/04/1995', type: 'Członek' },
  { id: 4, name: 'Paweł', surname: 'Kościołek', birthdayDate: '30/04/1975', entryDate: '25/10/1963', type: 'JOT' },
  { id: 5, name: 'Radosław', surname: 'Kurlapski', birthdayDate: '25/10/1963', entryDate: '04/01/2000', type: 'JOT' },
  { id: 6, name: 'Krzysztof', surname: 'Bieniek', birthdayDate: '14/12/1983', entryDate: '25/10/1963', type: 'JOT' },
  { id: 7, name: 'Alicja', surname: 'Wiedro-Stempińska', birthdayDate: '25/10/1963', entryDate: '29/05/2012', type: 'JOT' },
  { id: 8, name: 'Daniel', surname: 'Gaik', birthdayDate: '16/011984', entryDate: '25/10/1963', type: 'Członek' },
  { id: 9, name: 'Jakub', surname: 'Pyda', birthdayDate: '25/10/1963', entryDate: '03/04/2015', type: 'JOT' },
  { id: 10, name: 'Albert', surname: 'Mazurkiewicz', birthdayDate: '12/11/1992', entryDate: '25/10/1963', type: 'Członek' },
];

@Component({
  selector: 'app-firefighters',
  templateUrl: './firefighters.component.html',
  styleUrls: ['./firefighters.component.scss'],
  providers: [TableService]
})
export class FirefightersComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  tableConfig: Array<Column>;
  iconType = IconType;

  constructor(private table: TableService) {
    this.tableConfig = this.createTableConfig();
  }

  ngOnInit() {
  }

  private createTableConfig(): Array<Column> {
    this.table.addColumn('edit').addIcon(this.iconType.EDIT).save();
    this.table.addColumn('id', '51px').addTranslation('global.id').save();
    this.table.addColumn('name').addTranslation('firefighters.name').save();
    this.table.addColumn('surname').addTranslation('firefighters.surname').save();
    this.table.addColumn('birthdayDate').addTranslation('firefighters.birthdayDate').save();
    this.table.addColumn('entryDate').addTranslation('firefighters.entryDate').save();
    this.table.addColumn('type').addTranslation('firefighters.type').save();
    this.table.addColumn('remove').addIcon(this.iconType.REMOVE).save();
    return this.table.getConfig();
  }

}
