import { TestBed } from '@angular/core/testing';

import { AskoService } from './asko.service';

describe('AskoService', () => {
  let service: AskoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AskoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
