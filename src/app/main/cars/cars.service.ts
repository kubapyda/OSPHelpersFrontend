import * as _ from 'lodash';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Car } from '@app/shared/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class CarsService {
  private requestUrl = `${environment.SERVER_URL}/api/cars`;

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

  save(car: Car): Observable<Car> {
    return this.http.post<Car>(this.requestUrl, car);
  }

  update(id: number, car: Car): Observable<any> {
    return this.http.put(`${this.requestUrl}/${id}`, car);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.requestUrl}/${id}`);
  }
}
