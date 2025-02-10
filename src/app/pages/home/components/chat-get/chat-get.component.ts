import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chat-get',
  standalone: true,
  imports: [],
  templateUrl: './chat-get.component.html',
  styleUrl: './chat-get.component.css'
})
export class ChatGetComponent {

    text_response = input.required<string>();
  

}
