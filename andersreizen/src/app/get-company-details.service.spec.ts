import { TestBed } from '@angular/core/testing';

import { GetCompanyDetailsService } from './get-company-details.service';

describe('GetCompanyDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCompanyDetailsService = TestBed.get(GetCompanyDetailsService);
    expect(service).toBeTruthy();
  });
});
