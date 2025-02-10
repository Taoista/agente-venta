import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGetComponent } from './chat-get.component';

describe('ChatGetComponent', () => {
  let component: ChatGetComponent;
  let fixture: ComponentFixture<ChatGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatGetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
