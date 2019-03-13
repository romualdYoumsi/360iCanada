import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressEntryImmigrationDrawsComponent } from './express-entry-immigration-draws.component';

describe('ExpressEntryImmigrationDrawsComponent', () => {
  let component: ExpressEntryImmigrationDrawsComponent;
  let fixture: ComponentFixture<ExpressEntryImmigrationDrawsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressEntryImmigrationDrawsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressEntryImmigrationDrawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
