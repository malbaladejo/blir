import { TestBed } from '@angular/core/testing';

import { HomeMenuService } from './homemenu.service';

describe('HomemenuService', () => {
  let service: HomeMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
