import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationType } from './registration-type';

describe('RegistrationType', () => {
  let component: RegistrationType;
  let fixture: ComponentFixture<RegistrationType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationType],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationType);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
