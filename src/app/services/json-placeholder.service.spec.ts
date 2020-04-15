import { TestBed } from '@angular/core/testing';

import { JsonPlaceholderService } from './json-placeholder.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('JsonPlaceholderService', () => {
  let service: JsonPlaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: HttpClient,
        useValue: {
          get() {},
          post() {}
        }
      }]
    });
    service = TestBed.inject(JsonPlaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
