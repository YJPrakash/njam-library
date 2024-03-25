import { TestBed } from '@angular/core/testing';

import { NjamLibraryService } from './njam-library.service';

describe('NjamLibraryService', () => {
  let service: NjamLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NjamLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
