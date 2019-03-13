import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressEntrySkilledImmigrationComponent } from './express-entry-skilled-immigration.component';

describe('ExpressEntrySkilledImmigrationComponent', () => {
  let component: ExpressEntrySkilledImmigrationComponent;
  let fixture: ComponentFixture<ExpressEntrySkilledImmigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressEntrySkilledImmigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressEntrySkilledImmigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
