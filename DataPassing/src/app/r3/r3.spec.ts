import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R3 } from './r3';

describe('R3', () => {
  let component: R3;
  let fixture: ComponentFixture<R3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [R3],
    }).compileComponents();

    fixture = TestBed.createComponent(R3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
