import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceServiceOnArrivalComponent } from './assistance-service-on-arrival.component';

describe('AssistanceServiceOnArrivalComponent', () => {
  let component: AssistanceServiceOnArrivalComponent;
  let fixture: ComponentFixture<AssistanceServiceOnArrivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistanceServiceOnArrivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceServiceOnArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
