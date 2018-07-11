import * as _ from 'lodash';

import { Observable, forkJoin, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguageService {

  constructor(private translate: TranslateService, private http: HttpClient) {
    this.translate.setDefaultLang('pl');
  }

  getTranslations(parts: string[]): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (_.size(parts) === 0) {
        resolve(true);
      }

      forkJoin(parts.map((key: string) => this.getTranslation('pl', key))).subscribe(
        response => resolve(true),
        () => resolve(true));
    });
  }

  getTranslation(lang: string, partial: string): Observable<any> {
    return this.http.get(`assets/i18n/${lang}/${partial}.json`).pipe(
      map(response => {
        this.translate.setTranslation('pl', response, true);
        return response;
      })
    );
  }
}
