import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeCanBringYouComponent } from './what-we-can-bring-you.component';

describe('WhatWeCanBringYouComponent', () => {
  let component: WhatWeCanBringYouComponent;
  let fixture: ComponentFixture<WhatWeCanBringYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatWeCanBringYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeCanBringYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
