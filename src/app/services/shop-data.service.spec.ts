import { TestBed, inject } from '@angular/core/testing';

import { ShopDataService } from './shop-data.service';

describe('ShopDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopDataService]
    });
  });

  it('should be created', inject([ShopDataService], (service: ShopDataService) => {
    expect(service).toBeTruthy();
  }));
});
