import { TestBed } from '@angular/core/testing';

import { MerchantCategoriesService } from './merchant-categories.service';

describe('MerchantCategoriesService', () => {
  let service: MerchantCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchantCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
