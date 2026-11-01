import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOperation } from './user-operation';

describe('UserOperation', () => {
  let component: UserOperation;
  let fixture: ComponentFixture<UserOperation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserOperation],
    }).compileComponents();

    fixture = TestBed.createComponent(UserOperation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
