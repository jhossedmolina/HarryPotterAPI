import { TestBed } from '@angular/core/testing';

import { HarrypotterService } from './harrypotter.service';

describe('HarrypotterService', () => {
  let service: HarrypotterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarrypotterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
