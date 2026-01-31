import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagerecipe } from './admin-managerecipe';

describe('AdminManagerecipe', () => {
  let component: AdminManagerecipe;
  let fixture: ComponentFixture<AdminManagerecipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminManagerecipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManagerecipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
