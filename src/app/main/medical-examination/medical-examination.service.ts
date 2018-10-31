import * as _ from 'lodash';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { MedicalExamination } from '@app/shared/model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class MedicalExaminationService {
  requestUrl = `${environment.SERVER_URL}/api/medical-examination`;

  constructor(private http: HttpClient) {}

  findAll(params?: Object): Observable<any> {
    const p = new HttpParams().set('page', _.get(params, 'page'));
    return this.http.request('get', this.requestUrl, {
      params: p,
      observe: 'response'
    });
  }

  findByFirefighterId(id: number): Observable<MedicalExamination[]> {
    return this.http.get<MedicalExamination[]>(`${this.requestUrl}/${id}`);
  }

  createForFirefighter(medicalExamination: MedicalExamination): Observable<MedicalExamination> {
    return this.http.post<MedicalExamination>(this.requestUrl, medicalExamination);
  }
}
