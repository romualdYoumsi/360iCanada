import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeEvaluationComponent } from './free-evaluation.component';

describe('FreeEvaluationComponent', () => {
  let component: FreeEvaluationComponent;
  let fixture: ComponentFixture<FreeEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
