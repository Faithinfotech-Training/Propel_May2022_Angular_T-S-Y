import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribelabComponent } from './prescribelab.component';

describe('PrescribelabComponent', () => {
  let component: PrescribelabComponent;
  let fixture: ComponentFixture<PrescribelabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescribelabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescribelabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
