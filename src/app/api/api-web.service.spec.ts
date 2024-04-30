import { TestBed } from '@angular/core/testing';

import { ApiWebService } from './api-web.service';

describe('ApiWebService', () => {
  let service: ApiWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
