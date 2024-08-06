import { TestBed } from '@angular/core/testing';

import { OrderamountService } from './orderamount.service';

describe('OrderamountService', () => {
  let service: OrderamountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderamountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
