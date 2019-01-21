import { Injectable } from '@angular/core';

import { Observable, from, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { catchError, tap, reduce, map } from 'rxjs/operators';
import { Car } from '../interface/car';

@Injectable({
  providedIn: 'root'
})
export class CarsDetailsResolveService implements Resolve<any> {

  constructor(private httpClient: HttpClient) { }

  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean {
      console.log("next.params.id", next.params.id)
      return this.httpClient.get(`./data/cars.json`)
              .pipe(
                map((cars: Car[]) => cars.filter(car => car.id == next.params.id)[0]),
                catchError(() => [])
              )
  }

  
}