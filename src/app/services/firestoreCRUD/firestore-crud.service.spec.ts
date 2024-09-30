import { TestBed } from '@angular/core/testing';

import { FirestoreCRUDService } from './firestore-crud.service';

describe('FirestoreCRUDService', () => {
  let service: FirestoreCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
