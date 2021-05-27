import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Laptop } from '../../models/laptop.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompareService {
    private laptops: Laptop[];
    private laptops$: Subject<Laptop[]> = new Subject<Laptop[]>()

  constructor() {
    this.laptops = []
    this.laptops$ = new Subject()
  }
  addLaptops(newLaptop: Laptop) {
      this.laptops.push(newLaptop)
      this.laptops$.next(this.laptops)
  }
  getLaptops$(): Observable<Laptop[]> {
      return this.laptops$.asObservable()
  }
  delLaptops(delLaptop: Laptop) {
      const del = this.laptops.findIndex(laptop => laptop._id === delLaptop._id)
      this.laptops.splice(del, 1)
      this.laptops$.next(this.laptops)
  }
}
