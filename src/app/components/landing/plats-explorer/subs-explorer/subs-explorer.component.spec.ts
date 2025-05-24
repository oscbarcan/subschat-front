import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsExplorerComponent } from './subs-explorer.component';

describe('SubsExplorerComponent', () => {
  let component: SubsExplorerComponent;
  let fixture: ComponentFixture<SubsExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubsExplorerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
