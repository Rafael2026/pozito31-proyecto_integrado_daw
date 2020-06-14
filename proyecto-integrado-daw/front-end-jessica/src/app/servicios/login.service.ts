import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuarios } from '../interfaces/usuarios';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<Usuarios>;
  public currentUser: Observable<Usuarios>;
  
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Usuarios>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Usuarios {
    return this.currentUserSubject.value;
}

  login(usuario, password) {
    return this.http.post<any>(`${environment.apiUrl}/usuarios/authenticate`, { usuario, password })
        .pipe(map(usuarios => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(usuarios));
            this.currentUserSubject.next(usuarios);
            return usuarios;
        }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  
}
