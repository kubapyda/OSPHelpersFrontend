import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PaginationConfig } from '@app/shared/model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input('config') paginationConfig: PaginationConfig;
  @Output('page') changePage: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  changePageFn(evt: Event) {
    this.changePage.emit(evt);
  }

}
