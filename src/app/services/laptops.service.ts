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

  getLaptops(filter: string, minPrice: string, maxPrice: string, cpuAMD: string, cpuINTEL: string, cpuMONE: string, graphicsAMD: string, graphicsNVIDIA: string, graphicsINTEGRATED: string, romHDD: string, romSSD: string, ram_typeTHREE: string, ram_typeFOUR: string): Observable<any> {
    const params = { filter: filter, minPrice: minPrice, maxPrice: maxPrice, cpuAMD: cpuAMD, cpuINTEL: cpuINTEL, cpuMONE: cpuMONE, graphicsAMD: graphicsAMD, graphicsNVIDIA: graphicsNVIDIA, graphicsINTEGRATED: graphicsINTEGRATED, romHDD: romHDD, romSSD: romSSD, ram_typeTHREE: ram_typeTHREE, ram_typeFOUR: ram_typeFOUR};
    return this.httpClient
      .get(`${environment.apiUrl}/laptops`, { params: params })
      .pipe(
        catchError((error) => {
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
    getPaginationLaptops(page: number): Observable<any> {
        return this.httpClient
          .get(`${environment.apiUrl}/pagelaptops/${page}`)
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
