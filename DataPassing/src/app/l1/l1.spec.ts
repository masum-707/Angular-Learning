import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L1 } from './l1';

describe('L1', () => {
  let component: L1;
  let fixture: ComponentFixture<L1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [L1],
    }).compileComponents();

    fixture = TestBed.createComponent(L1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
