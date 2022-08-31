import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestHistoryComponent } from './labtest-history.component';

describe('LabtestHistoryComponent', () => {
  let component: LabtestHistoryComponent;
  let fixture: ComponentFixture<LabtestHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtestHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
