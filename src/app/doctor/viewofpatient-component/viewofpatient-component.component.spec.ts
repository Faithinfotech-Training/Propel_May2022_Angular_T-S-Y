import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewofpatientComponentComponent } from './viewofpatient-component.component';

describe('ViewofpatientComponentComponent', () => {
  let component: ViewofpatientComponentComponent;
  let fixture: ComponentFixture<ViewofpatientComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewofpatientComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewofpatientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
