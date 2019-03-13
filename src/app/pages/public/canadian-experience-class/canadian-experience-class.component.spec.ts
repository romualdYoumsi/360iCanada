import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadianExperienceClassComponent } from './canadian-experience-class.component';

describe('CanadianExperienceClassComponent', () => {
  let component: CanadianExperienceClassComponent;
  let fixture: ComponentFixture<CanadianExperienceClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanadianExperienceClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadianExperienceClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
