import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}


  signup(user: User): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/signup`, user).pipe(
      catchError((error) => {
        return error;
      })
    );
  }

  login(user: User): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/login`, user).pipe(
      catchError((error) => {
        return error;
      })
    );
  }

  sendEmailNewUser(destination: string): Observable<any> {
    const params = {destination: destination};
    return this.httpClient
      .get(`${environment.apiUrl}/sendPageToNewUser`, {params: params})
      .pipe(
        catchError((error) => {
          return error;
        })
      );
  }

}
