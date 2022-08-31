import { TestBed } from '@angular/core/testing';

import { LabtestHistoryService } from './labtest-history.service';

describe('LabtestHistoryService', () => {
  let service: LabtestHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabtestHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
