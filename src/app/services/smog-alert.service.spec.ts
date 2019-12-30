import { TestBed } from '@angular/core/testing';

import { SmogAlertService } from './smog-alert.service';

describe('SmogAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmogAlertService = TestBed.get(SmogAlertService);
    expect(service).toBeTruthy();
  });
});
