import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingNavbarComponent } from './landing-navbar.component';

describe('LandingNavbarComponent', () => {
  let component: LandingNavbarComponent;
  let fixture: ComponentFixture<LandingNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
