import { TestBed } from '@angular/core/testing';

import { PrescribelabService } from './prescribelab.service';

describe('PrescribelabService', () => {
  let service: PrescribelabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescribelabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
