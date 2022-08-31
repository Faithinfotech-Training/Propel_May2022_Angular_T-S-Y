import { TestBed } from '@angular/core/testing';

import { DoctordashboardService } from './doctordashboard.service';

describe('DoctordashboardService', () => {
  let service: DoctordashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctordashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
