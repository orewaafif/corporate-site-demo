import { TestBed } from '@angular/core/testing';

import { HorizontalMenuService } from './horizontal-menu.service';

describe('HorizontalMenuService', () => {
  let service: HorizontalMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorizontalMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
