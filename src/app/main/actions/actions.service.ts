import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class ActionsService {

  private requestUrl = `${environment.SERVER_URL}/api/actions`;

  constructor(private http: HttpClient) { }

  query(): Observable<any> {
    return this.http.get(this.requestUrl);
  }

  save(action: any): Observable<any> { // change type
    return this.http.post(this.requestUrl, action);
  }
}
