import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatsCarouselComponent } from './plats-carousel.component';

describe('PlatsCarouselComponent', () => {
  let component: PlatsCarouselComponent;
  let fixture: ComponentFixture<PlatsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatsCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
