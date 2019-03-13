import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationToApplyForPermanentResidenceComponent } from './invitation-to-apply-for-permanent-residence.component';

describe('InvitationToApplyForPermanentResidenceComponent', () => {
  let component: InvitationToApplyForPermanentResidenceComponent;
  let fixture: ComponentFixture<InvitationToApplyForPermanentResidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationToApplyForPermanentResidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationToApplyForPermanentResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
