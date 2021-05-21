import { Admin } from './../models/admin.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}


  signup(admin: Admin): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/signupadmin`, admin).pipe(
      catchError((error) => {
        return error;
      })
    );
  }

  login(admin: Admin): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/loginadmin`, admin).pipe(
      catchError((error) => {
        return error;
      })
    );
  }

}
