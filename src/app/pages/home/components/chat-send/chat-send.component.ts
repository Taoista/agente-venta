import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chat-send',
  standalone: true,
  imports: [],
  templateUrl: './chat-send.component.html',
  styleUrl: './chat-send.component.css'
})
export class ChatSendComponent {

  text_msg = input.required<string>();

}
