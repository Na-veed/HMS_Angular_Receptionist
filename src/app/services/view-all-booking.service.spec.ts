import { TestBed } from '@angular/core/testing';

import { ViewAllBookingService } from './view-all-booking.service';

describe('ViewAllBookingService', () => {
  let service: ViewAllBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAllBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
