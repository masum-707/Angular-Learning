import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L3 } from './l3';

describe('L3', () => {
  let component: L3;
  let fixture: ComponentFixture<L3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [L3],
    }).compileComponents();

    fixture = TestBed.createComponent(L3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
