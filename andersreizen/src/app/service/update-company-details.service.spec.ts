import { TestBed } from '@angular/core/testing';

import { UpdateCompanyDetailsService } from './update-company-details.service';

describe('UpdateCompanyDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateCompanyDetailsService = TestBed.get(UpdateCompanyDetailsService);
    expect(service).toBeTruthy();
  });
});
