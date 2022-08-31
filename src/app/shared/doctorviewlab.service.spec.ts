import { TestBed } from '@angular/core/testing';

import { DoctorviewlabService } from './doctorviewlab.service';

describe('DoctorviewlabService', () => {
  let service: DoctorviewlabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorviewlabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
