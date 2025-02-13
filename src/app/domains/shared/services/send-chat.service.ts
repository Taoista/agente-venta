import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class SendChatService {

    private http = inject(HttpClient);
  
    // private url = 'http://backend-agente-venta.test/api/neumaticos';
    // private url = `${environment.API_URL}/ddf2f7c0-ba5d-469b-9137-af1d6bb6df01`;
    private url = "https://taoistadev.app.n8n.cloud/webhook/ddf2f7c0-ba5d-469b-9137-af1d6bb6df01";
   
    constructor() { }
  
    async getData(text:string):Promise<any> {
  
      const url_final:string = `${this.url}`;
  
      const body = {
        param1: text,
        sessionId:'asdasdasd',
        action:'sendMessage'
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
