import * as _ from 'lodash';

import { HttpClient, HttpParams } from '@angular/common/http';

import { EquipmentItem } from '@app/shared/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class EquipmentService {

  requestUrl = `${environment.SERVER_URL}/api/equipment`;

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

  findMinimal(): Observable<any> {
    return this.http.get(`${this.requestUrl}/minimal`);
  }

  save(equipmentItem: EquipmentItem): Observable<any> {
    return this.http.post(this.requestUrl, equipmentItem);
  }

  update(id: number, equipmentItem: EquipmentItem): Observable<any> {
    return this.http.put(`${this.requestUrl}/${id}`, equipmentItem);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.requestUrl}/${id}`);
  }
}
