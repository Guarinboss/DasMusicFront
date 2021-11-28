import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cancion } from '../_model/Cancion';

/**
 * Variable constante que especifica el tipo de archivo que se quiere enviar.
 */
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    /*"Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "Origin,Content-Type,Accept,Authorization,content-type",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS,HEAD",
    "Access-Control-Max-Age": "1209500",*/
    //Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aWJpb24iLCJpYXQiOjE2Mzc4MDU3MDYsImV4cCI6MTYzNzgwNjYwNiwicGVybWlzb3MiOnsiMSI6IkFkbWluaXN0cmFkb3IifX0.Dl31D6PZjTHDKoHcsyHVdtj2fpuUFCXBCjr6qz9FEj9h4-cxOf80UYPhiqRB40YEmsZl_95TWgcRC5z-SdjhCg'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CancionService {

  /**
  * Variable que almacena la URL.
  */
  private url: string = `${environment.HOST}/canciones/`;

  constructor(private http: HttpClient) { }

  postGuardar(cancion: Cancion): Observable<any> {
    return this.http.post<any>(this.url + 'guardar', cancion);
  }
}
