import { TestBed } from '@angular/core/testing';

import { BaitsService } from './baits.service';

describe('BaitsService', () => {
  let service: BaitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
