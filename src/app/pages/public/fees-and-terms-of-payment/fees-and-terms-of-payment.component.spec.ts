import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesAndTermsOfPaymentComponent } from './fees-and-terms-of-payment.component';

describe('FeesAndTermsOfPaymentComponent', () => {
  let component: FeesAndTermsOfPaymentComponent;
  let fixture: ComponentFixture<FeesAndTermsOfPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesAndTermsOfPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesAndTermsOfPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
