import { TestBed } from '@angular/core/testing';

import { BusesDataServiceService } from './buses-data-service.service';

describe('BusesDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusesDataServiceService = TestBed.get(BusesDataServiceService);
    expect(service).toBeTruthy();
  });
});
