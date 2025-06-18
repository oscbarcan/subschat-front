import { TestBed } from '@angular/core/testing';

import { BannersService } from './banners.service';

describe('BannersService', () => {
  let service: BannersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
