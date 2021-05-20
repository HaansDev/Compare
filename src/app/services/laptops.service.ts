import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Laptop } from './../models/laptop.model';

@Injectable({
  providedIn: 'root'
})
export class LaptopsService {

  constructor(private httpClient: HttpClient) { }

  saveLaptop(laptop: Laptop): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/savelaptop`, laptop).pipe(
      catchError((error) => {
        return error;
      })
    );
  }


  getLaptop(id: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/laptop/${id}`).pipe(
      catchError(error => {
        return error;
      })
    );
  }

  getSomeLaptops(page: number): Observable<any> {
      return this.httpClient
        .get(`${environment.apiUrl}/somelaptops/${page}`)
        .pipe(
          catchError((error) => {
            return error;
          })
        );
    }

    getAllLaptops(): Observable<any> {

      return this.httpClient
        .get(`${environment.apiUrl}/alllaptops`)
        .pipe(
          catchError((error) => {
            return error;
          })
        );
    }


  updateLaptop(laptop: Laptop): Observable<any> {
    return this.httpClient
      .put(`${environment.apiUrl}/laptop/${laptop._id}`, laptop)
      .pipe(
        catchError((error) => {
          return error;
        })
      );
  }

  deleteLaptop(id: string): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/laptop/${id}`).pipe(
      catchError((error) => {
        return error;
      })
    );
  }






}
