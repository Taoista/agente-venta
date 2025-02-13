import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChatGetComponent } from './components/chat-get/chat-get.component';
import { ChatSendComponent } from './components/chat-send/chat-send.component';
import { SendChatService } from '@shared/services/send-chat.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ChatSendComponent, ChatGetComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private serviceSendChat = inject(SendChatService);
  
  productos = [];

  list_chats:any[] = [];

  input_chat = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  });


  constructor(){}

  send_chat(){
  
    const text = this.input_chat.value;
    
    this.input_chat.setValue('');

    this.list_chats.push({
      tipe:'send',
      text:text,
    });
    this.serviceSendChat.getData(text).then((response) => {
      this.list_chats.push({
        tipe:'get',
        text:response.output,
      });
      console.log(response.output);
    }).catch((error) => {
      console.log(error)
    }).finally(() => {

    })
  }


//   Laura
// 11:46
// Aquí tienes algunos precios de neumáticos tamaño R22: 1. **11 R22.5 146/143 M GRT901** - Precio: **$155,033** - ![Imagen](https://i.ibb.co/MpgThP3/112787.jpg) 2. **11 R22.5 16 PR HF638** - Precio: **$151,883** - ![Imagen](https://i.ibb.co/PW6Rwv1/image.webp) 3. **NEUM. 11 R22.5 16PR 146/143M 366** - Precio: **$145,635** - ![Imagen](https://i.ibb.co/LzLg4s5/image.webp) 4. **11 R22.5 16PR W1060** - Precio: **$191,126** - ![Imagen](https://i.ibb.co/Xx5Bdd3/image.webp) 5. **NEUM.12 R22.5 16PR MD-738 W CHAOYANG** - Precio: **$241,160** - ![Imagen](https://i.ibb.co/tbdKkms/image.webp) Estos son solo algunos ejemplos y los precios pueden variar dependiendo del proveedor. Si necesitas más información o precios adicionales, no dudes en preguntar.


}
