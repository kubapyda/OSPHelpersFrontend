import { Component, EventEmitter, Output } from '@angular/core';

import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Output() submitFn: EventEmitter<any> = new EventEmitter<any>();

  constructor(public modal: ModalService) {}

  save(): void {
    this.submitFn.emit();
  }
}
