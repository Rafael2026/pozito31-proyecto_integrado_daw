import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pluck, share, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(usuario: string, password: string){

    console.log('Entra en login');
    this.http.get<any>('http://pi.diiesmurgi.org/~jessica/REST_API/api/v1/usuarios').subscribe((response) => {
      console.log("La respuesta es: ", response)
    });
  }
}
