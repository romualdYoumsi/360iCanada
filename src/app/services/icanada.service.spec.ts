import { TestBed, inject } from '@angular/core/testing';

import { IcanadaService } from './icanada.service';

describe('IcanadaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IcanadaService]
    });
  });

  it('should be created', inject([IcanadaService], (service: IcanadaService) => {
    expect(service).toBeTruthy();
  }));
});
