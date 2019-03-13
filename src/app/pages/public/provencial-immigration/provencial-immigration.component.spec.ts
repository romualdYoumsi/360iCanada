import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvencialImmigrationComponent } from './provencial-immigration.component';

describe('ProvencialImmigrationComponent', () => {
  let component: ProvencialImmigrationComponent;
  let fixture: ComponentFixture<ProvencialImmigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvencialImmigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvencialImmigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
