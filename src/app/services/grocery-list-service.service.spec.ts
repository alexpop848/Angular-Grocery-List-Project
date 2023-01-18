import { TestBed } from '@angular/core/testing';

import { GroceryListServiceService } from './grocery-list-service.service';

describe('GroceryListServiceService', () => {
  let service: GroceryListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceryListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
