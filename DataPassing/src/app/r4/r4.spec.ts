import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R4 } from './r4';

describe('R4', () => {
  let component: R4;
  let fixture: ComponentFixture<R4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [R4],
    }).compileComponents();

    fixture = TestBed.createComponent(R4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
