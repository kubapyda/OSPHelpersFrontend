import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {
  @Input('title') modalTitle: string;
  @Input('content') modalContent: string;
  @Input('contentParams') modalContentParams: Object;
  @Output('confirmAction') confirmFn;

  constructor() {}
}
