import { TestBed } from '@angular/core/testing';

import { ServertodoService } from './servertodo.service';

describe('ServertodoService', () => {
  let service: ServertodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServertodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
