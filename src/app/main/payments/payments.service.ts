import * as _ from 'lodash';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class PaymentsService {
  requestUrl = `${environment.SERVER_URL}/api/payments`;

  constructor(private http: HttpClient) {}

  findAll(params?: Object): Observable<any> {
    const p = new HttpParams().set('page', _.get(params, 'page'));
    return this.http.request('get', this.requestUrl, {
      params: p,
      observe: 'response'
    });
  }

  findFirefighterPayments(id: number): Observable<any> {
    return this.http.get(`${this.requestUrl}/${id}`);
  }

  create(payment: { paidYear: number, FirefighterId: number}): Observable<any> {
    return this.http.post(this.requestUrl, payment);
  }
}
