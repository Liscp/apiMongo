import { TestBed } from '@angular/core/testing';

import { LoginAuntenticacionService } from './login-auntenticacion.service';

describe('LoginAuntenticacionService', () => {
  let service: LoginAuntenticacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAuntenticacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
