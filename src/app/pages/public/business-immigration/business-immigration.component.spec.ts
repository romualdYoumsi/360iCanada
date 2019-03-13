import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessImmigrationComponent } from './business-immigration.component';

describe('BusinessImmigrationComponent', () => {
  let component: BusinessImmigrationComponent;
  let fixture: ComponentFixture<BusinessImmigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessImmigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessImmigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
