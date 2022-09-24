import { TestBed } from '@angular/core/testing';

import { PlanetsServiceService } from './planets-service.service';

describe('PlanetsServiceService', () => {
  let service: PlanetsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
