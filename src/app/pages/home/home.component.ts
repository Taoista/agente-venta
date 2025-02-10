import { Component, inject } from '@angular/core';
import { ProductoService } from '@shared/services/producto.service';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChatGetComponent } from './components/chat-get/chat-get.component';
import { ChatSendComponent } from './components/chat-send/chat-send.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ChatSendComponent, ChatGetComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private serviceProductos = inject(ProductoService);
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODQ0MTEyOS1mNWJkLTQ5MzAtOTUyNC1mMDE3NGM5YWFhYTQiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzM5MTM0NTU3fQ.Vx-uaJqRpfnALAGsK6LmWl18SnEJWIMgmt9oqQVf30A
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

    this.list_chats.push({
      tipe:'send',
      text:text,
    });
    this.serviceProductos.getData().then((response) => {
      this.list_chats.push({
        tipe:'get',
        text:response,
      });
    }).catch((error) => {
      console.log(error)
    }).finally(() => {

    })
  }


}
