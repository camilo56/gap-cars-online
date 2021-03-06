import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Car } from '../interface/car';

@Injectable({
  providedIn: 'root'
})
export class CarsDataResolveService implements Resolve<any> {

  constructor(private httpClient: HttpClient) { }

  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean {
      return this.httpClient.get(`./data/cars.json`)
              .pipe(
                tap((data: Car[]) => data.sort((a, b) => {
                                        let x = a.mark.toLowerCase();
                                        let y = b.mark.toLowerCase();
                                        return x < y ? -1 : x > y ? 1 : 0;
                                    }))
              )
  }

  
}