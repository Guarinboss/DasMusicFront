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
    Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aWJpb24iLCJpYXQiOjE2Mzc4ODY1MzcsImV4cCI6MTYzNzg5ODQzNywicGVybWlzb3MiOnsiMSI6IkFkbWluaXN0cmFkb3IifX0.sF_DqNVq0SxW7BI6fpUc2D2-p_sDQG9yc5yHdw4mteRimsy2qTUN9WMmsz5SCwFw6rXmpRnVfQkhF7vR02KW0g'
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

  getObtener() {
    return this.http.get<Cancion[]>(this.url + 'obtener');
  } 

  getObtenerPorAlbum(id: number) {
    return this.http.get<Cancion[]>(this.url + 'obtenerPorIdAlbum/'+id);
  }
}
