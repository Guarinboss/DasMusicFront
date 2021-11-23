import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artista } from '../_model/Artista';

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
export class MusicaService {

  private url: string = `${environment.HOST}/api/artistas/`;

  private url2: string = `${environment.HOST}/api/canciones/`;

  private url3: string = `${environment.HOST}/api/albumes/`;

  constructor(private http: HttpClient) { }

  postGuardarArtista(artista: Artista): Observable<any>{
    return this.http.post<any>(this.url + 'guardar', artista, httpOptions);
  }
  getListarArtista(): Observable<any>{
    return this.http.post<any>(this.url + 'obtener', httpOptions);
  }
}
