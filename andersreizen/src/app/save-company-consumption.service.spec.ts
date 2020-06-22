import { TestBed } from '@angular/core/testing';

import { SaveCompanyConsumptionService } from './save-company-consumption.service';

describe('SaveCompanyConsumptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveCompanyConsumptionService = TestBed.get(SaveCompanyConsumptionService);
    expect(service).toBeTruthy();
  });
});
