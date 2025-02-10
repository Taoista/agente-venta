import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private http = inject(HttpClient);

  // private url = 'http://backend-agente-venta.test/api/neumaticos';
  private url = '';
 
  constructor() { }

  async getData():Promise<any> {

  }
}
