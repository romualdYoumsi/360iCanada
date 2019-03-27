import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFreeEvaluationComponent } from './admin-free-evaluation.component';

describe('AdminFreeEvaluationComponent', () => {
  let component: AdminFreeEvaluationComponent;
  let fixture: ComponentFixture<AdminFreeEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFreeEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFreeEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
