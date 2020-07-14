import { TestBed } from '@angular/core/testing';

import { StatsHelperService } from './stats-helper.service';

describe('StatsHelperService', () => {
  let service: StatsHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatsHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
