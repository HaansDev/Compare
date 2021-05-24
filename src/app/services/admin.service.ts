import { Mail } from './../models/mail.model';
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

  adminDetail(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/admin`)
      .pipe(
        catchError((error: any) => {
          return error;
        })
      );
  }

  updateAdmin(admin: Admin): Observable<any> {
    return this.httpClient
      .put(`${environment.apiUrl}/admin/${admin._id}`, admin)
      .pipe(
        catchError((error) => {
          return error;
        })
      );
  }

  getAdmins(): Observable<any> {
    return this.httpClient
      .get(`${environment.apiUrl}/admins`)
      .pipe(
        catchError((error) => {
          return error;
        })
      );
  }

  sendEmailAdmins(destination: string, subject: string, message: string): Observable<any> {
    const params = {destination: destination, subject: subject, message: message};
    return this.httpClient
      .get(`${environment.apiUrl}/sendAdminToAdmin`, {params: params})
      .pipe(
        catchError((error) => {
          return error;
        })
      );
  }

}
