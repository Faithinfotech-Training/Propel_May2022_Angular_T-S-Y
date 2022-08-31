import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribemedComponent } from './prescribemed.component';

describe('PrescribemedComponent', () => {
  let component: PrescribemedComponent;
  let fixture: ComponentFixture<PrescribemedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescribemedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescribemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
