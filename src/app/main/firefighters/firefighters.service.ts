import * as _ from 'lodash';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Firefighter } from '@app/shared/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirefightersService {
  requesturl = 'http://localhost:3333/api/firefighters';

  constructor(private http: HttpClient) {}

  findAll(params?: Object): Observable<any> {
    const p = new HttpParams().set('page', _.get(params, 'page'));
    return this.http.request('get', this.requesturl, {
      params: p,
      observe: 'response'
    });
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.requesturl}/${id}`);
  }

  save(firefighter: Firefighter): Observable<any> {
    return this.http.post(this.requesturl, firefighter);
  }

  update(id: number, firefighter: Firefighter): Observable<any> {
    return this.http.put(`${this.requesturl}/${id}`, firefighter);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.requesturl}/${id}`);
  }
}
