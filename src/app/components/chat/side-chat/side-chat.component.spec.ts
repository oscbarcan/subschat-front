import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideChatComponent } from './side-chat.component';

describe('SideChatComponent', () => {
  let component: SideChatComponent;
  let fixture: ComponentFixture<SideChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
