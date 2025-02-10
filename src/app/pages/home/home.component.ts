import { Component, inject } from '@angular/core';
import { ProductoService } from '@shared/services/producto.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private serviceProductos = inject(ProductoService);
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODQ0MTEyOS1mNWJkLTQ5MzAtOTUyNC1mMDE3NGM5YWFhYTQiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzM5MTM0NTU3fQ.Vx-uaJqRpfnALAGsK6LmWl18SnEJWIMgmt9oqQVf30A
  productos = [];

  constructor(){}

  getProducts(){
    // "id": 1,
    // "codigo": "108042",
    // "modelo": "chaoyang",
    // "medida": "10.00 R20",
    // "precio": "214644.00",
    // "stock": 1,
    // "created_at": "2025-02-09T15:26:30.000000Z",
    // "updated_at": "2025-02-09T15:26:30.000000Z"
    this.serviceProductos.getData().then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error)
    }).finally(() => {

    })
  }


}
