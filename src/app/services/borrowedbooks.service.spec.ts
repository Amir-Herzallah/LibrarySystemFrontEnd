import { TestBed } from '@angular/core/testing';

import { BorrowedbooksService } from './borrowedbooks.service';

describe('BorrowedbooksService', () => {
  let service: BorrowedbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrowedbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
