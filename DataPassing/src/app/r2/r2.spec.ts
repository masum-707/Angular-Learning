import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R2 } from './r2';

describe('R2', () => {
  let component: R2;
  let fixture: ComponentFixture<R2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [R2],
    }).compileComponents();

    fixture = TestBed.createComponent(R2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
