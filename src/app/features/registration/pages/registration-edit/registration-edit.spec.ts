import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationEdit } from './registration-edit';

describe('RegistrationEdit', () => {
  let component: RegistrationEdit;
  let fixture: ComponentFixture<RegistrationEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
