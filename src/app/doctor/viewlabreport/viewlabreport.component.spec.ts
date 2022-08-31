import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlabreportComponent } from './viewlabreport.component';

describe('ViewlabreportComponent', () => {
  let component: ViewlabreportComponent;
  let fixture: ComponentFixture<ViewlabreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlabreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlabreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
