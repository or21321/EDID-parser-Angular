import { TestBed } from '@angular/core/testing';

import { EdidService } from './edid.service';

describe('EdidService', () => {
  let service: EdidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
