import { TestBed } from '@angular/core/testing';

import { DiagnoseHistoryService } from './diagnose-history.service';

describe('DiagnoseHistoryService', () => {
  let service: DiagnoseHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnoseHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
