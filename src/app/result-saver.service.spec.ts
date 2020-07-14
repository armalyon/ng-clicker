import { TestBed } from '@angular/core/testing';

import { ResultSaverService } from './result-saver.service';

describe('ResultSaverService', () => {
  let service: ResultSaverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultSaverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
