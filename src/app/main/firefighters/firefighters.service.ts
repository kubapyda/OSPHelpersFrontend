import * as _ from 'lodash';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Firefighter } from '@app/shared/model';
import { FirefighterType } from '@app/shared/enums';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class FirefightersService {
  requestUrl = `${environment.SERVER_URL}/api/firefighters`;

  constructor(private http: HttpClient) {}

  findAll(params?: Object): Observable<any> {
    const p = new HttpParams().set('page', _.get(params, 'page'));
    return this.http.request('get', this.requestUrl, {
      params: p,
      observe: 'response'
    });
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.requestUrl}/${id}`);
  }

  findMinimal(type: FirefighterType): Observable<any> {
    return this.http.get(`${this.requestUrl}/minimal/${type}`);
  }

  save(firefighter: Firefighter): Observable<any> {
    return this.http.post(this.requestUrl, firefighter);
  }

  update(id: number, firefighter: Firefighter): Observable<any> {
    return this.http.put(`${this.requestUrl}/${id}`, firefighter);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.requestUrl}/${id}`);
  }
}
