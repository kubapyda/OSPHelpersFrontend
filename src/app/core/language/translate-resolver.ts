import * as _ from 'lodash';

import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TranslateResolver implements Resolve<boolean> {

  constructor(private translate: TranslateService, private language: LanguageService) {
    this.translate.setDefaultLang('pl');
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    const i18n = _.get(route, 'data.i18n') || [];
    return this.language.getTranslations(_.isArray(i18n) ? i18n : [i18n]);
  }
}
