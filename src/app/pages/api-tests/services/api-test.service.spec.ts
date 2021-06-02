import { TestBed } from '@angular/core/testing';

import { ApiTestService } from './api-test.service';

describe('ApiTestService', () => {
  let service: ApiTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
