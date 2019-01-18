import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CarsDataResolveService implements Resolve<any> {

  constructor(private httpClient: HttpClient) { }

  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean {
      return this.httpClient.get(`./data/cars.json`)
  }
}