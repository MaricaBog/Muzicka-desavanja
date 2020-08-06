import { TestBed } from '@angular/core/testing';

import { ReserveTicketsService } from './reserve-tickets.service';

describe('ReserveTicketsService', () => {
  let service: ReserveTicketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserveTicketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
