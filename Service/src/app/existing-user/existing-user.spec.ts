import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingUser } from './existing-user';

describe('ExistingUser', () => {
  let component: ExistingUser;
  let fixture: ComponentFixture<ExistingUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExistingUser],
    }).compileComponents();

    fixture = TestBed.createComponent(ExistingUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
