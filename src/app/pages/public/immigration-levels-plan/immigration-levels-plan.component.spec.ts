import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmigrationLevelsPlanComponent } from './immigration-levels-plan.component';

describe('ImmigrationLevelsPlanComponent', () => {
  let component: ImmigrationLevelsPlanComponent;
  let fixture: ComponentFixture<ImmigrationLevelsPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmigrationLevelsPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmigrationLevelsPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
