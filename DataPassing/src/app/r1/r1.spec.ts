import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R1 } from './r1';

describe('R1', () => {
  let component: R1;
  let fixture: ComponentFixture<R1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [R1],
    }).compileComponents();

    fixture = TestBed.createComponent(R1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
