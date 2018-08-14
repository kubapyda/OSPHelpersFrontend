import { Car } from '@app/shared/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class CarsService {
  private requestUrl = `${environment.SERVER_URL}/api/cars`;

  constructor(private http: HttpClient) {}

  save(car: Car): Observable<Car> {
    return this.http.post<Car>(this.requestUrl, car);
  }
}
