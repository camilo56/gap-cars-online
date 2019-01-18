import { TestBed } from '@angular/core/testing';

import { CarsDataResolveService } from './cars-data-resolve.service';

describe('CarsDataResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarsDataResolveService = TestBed.get(CarsDataResolveService);
    expect(service).toBeTruthy();
  });
});
