import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../_model/Login';
import { Registro } from '../_model/Registro';

/**
 * Variable constante que especifica el tipo de archivo que se quiere enviar.
 */
 const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegistroLoginService {
  
  /**
  * Variable que almacena la URL.
  */
 private url: string = `${environment.HOST}/auth/`;
 private url2: string = `${environment.HOST}/usuarios/`;

  constructor(private http: HttpClient) { }

  postLogin(login: Login): Observable<any> {
    return this.http.post<any>(this.url + 'token', login, httpOptions);
  }

  postRegistro(registroUsuarios: Registro): Observable<any> {
    return this.http.post<any>(this.url2 + 'guardar', registroUsuarios, httpOptions);
  }
}
