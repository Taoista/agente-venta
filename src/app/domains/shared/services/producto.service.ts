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

    const url_final:string = `${this.url}`;

    const body = {
      param1: 'enviando desde angular',
    };

    const username = 'username';
    const password = '7340458';
    const basicAuth = btoa(`${username}:${password}`);

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Basic ${basicAuth}`
      })
    };

   
      const response: any = await lastValueFrom(this.http.post<any>(this.url, body, options));

      return response;

  }
}
