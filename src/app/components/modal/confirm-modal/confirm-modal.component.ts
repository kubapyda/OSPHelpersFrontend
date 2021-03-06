import { Component, Input, Output } from '@angular/core';

import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {
  @Input('title') modalTitle: string;
  @Input('content') modalContent: string;
  @Input('contentParams') modalContentParams: Object;
  @Output('confirmAction')
  confirmFn: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  makeAction() {
    this.confirmFn.emit();
  }
}
