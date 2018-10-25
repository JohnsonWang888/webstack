import { TestBed, inject } from '@angular/core/testing';

import { HmntrdcService } from './hmntrdc.service';

describe('HmntrdcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HmntrdcService]
    });
  });

  it('should be created', inject([HmntrdcService], (service: HmntrdcService) => {
    expect(service).toBeTruthy();
  }));
});
