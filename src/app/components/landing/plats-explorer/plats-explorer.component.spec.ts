import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatsExplorerComponent } from './plats-explorer.component';

describe('PlatsExplorerComponent', () => {
  let component: PlatsExplorerComponent;
  let fixture: ComponentFixture<PlatsExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatsExplorerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatsExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
