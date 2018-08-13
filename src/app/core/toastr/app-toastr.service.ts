import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AppToastrService {
  constructor(
    private toastr: ToastrService,
    private translate: TranslateService
  ) {}

  success(msg: string, params?: Object, title: string = 'global.success') {
    this.toastr.success(
      this.translate.instant(msg, params),
      this.translate.instant(title)
    );
  }

  error(msg: string, params?: Object, title: string = 'global.failure') {
    this.toastr.error(
      this.translate.instant(msg, params),
      this.translate.instant(title)
    );
  }

  warning(msg: string, params?: Object, title?: string) {
    this.toastr.warning(
      this.translate.instant(msg, params),
      this.translate.instant(title)
    );
  }

  info(msg: string, params?: Object, title?: string) {
    this.toastr.info(
      this.translate.instant(msg, params),
      this.translate.instant(title)
    );
  }
}
