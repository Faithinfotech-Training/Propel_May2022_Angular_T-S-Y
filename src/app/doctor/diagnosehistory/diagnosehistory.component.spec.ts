import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosehistoryComponent } from './diagnosehistory.component';

describe('DiagnosehistoryComponent', () => {
  let component: DiagnosehistoryComponent;
  let fixture: ComponentFixture<DiagnosehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
