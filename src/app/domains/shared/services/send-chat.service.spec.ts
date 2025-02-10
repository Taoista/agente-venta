import { TestBed } from '@angular/core/testing';

import { SendChatService } from './send-chat.service';

describe('SendChatService', () => {
  let service: SendChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
