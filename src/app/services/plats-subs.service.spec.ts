import { TestBed } from '@angular/core/testing';

import { PlatsSubsService } from './plats-subs.service';

describe('PlatsSubsService', () => {
  let service: PlatsSubsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatsSubsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
