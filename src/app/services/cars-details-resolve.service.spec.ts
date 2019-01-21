import { TestBed } from '@angular/core/testing';

import { CarsDetailsResolveService } from './cars-details-resolve.service';

describe('CarsDetailsResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarsDetailsResolveService = TestBed.get(CarsDetailsResolveService);
    expect(service).toBeTruthy();
  });
});
