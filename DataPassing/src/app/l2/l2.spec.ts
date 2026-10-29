import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2 } from './l2';

describe('L2', () => {
  let component: L2;
  let fixture: ComponentFixture<L2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [L2],
    }).compileComponents();

    fixture = TestBed.createComponent(L2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
