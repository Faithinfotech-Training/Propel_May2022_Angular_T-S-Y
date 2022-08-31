import { TestBed } from '@angular/core/testing';

import { MedicineHistoryService } from './medicine-history.service';

describe('MedicineHistoryService', () => {
  let service: MedicineHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
