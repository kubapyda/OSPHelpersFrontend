import * as _ from 'lodash';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class CoursesService {
  requestUrl = `${environment.SERVER_URL}/api/courses`;

  constructor(private http: HttpClient) {}

  findAll(params?: Object): Observable<any> {
    const p = new HttpParams().set('page', _.get(params, 'page'));
    return this.http.request('get', this.requestUrl, {
      params: p,
      observe: 'response'
    });
  }

  findFirefighterCourse(id: number, type: string): Observable<any> {
    return this.http.get(`${this.requestUrl}/${id}/${type}`);
  }

  save(data: Object): Observable<any> {
    return this.http.post(this.requestUrl, data);
  }
}
