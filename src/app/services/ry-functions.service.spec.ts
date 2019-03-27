import { TestBed, inject } from '@angular/core/testing';

import { RyFunctionsService } from './ry-functions.service';

describe('RyFunctionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RyFunctionsService]
    });
  });

  it('should be created', inject([RyFunctionsService], (service: RyFunctionsService) => {
    expect(service).toBeTruthy();
  }));
});
