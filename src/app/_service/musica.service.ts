import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artista } from '../_model/Artista';
import { Cancion } from '../_model/Cancion';

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

  private url: string = `${environment.HOST}/artistas/`;

  private url2: string = `${environment.HOST}/canciones/`;

  private url3: string = `${environment.HOST}/albumes/`;

  constructor(private http: HttpClient) { }

  postGuardarArtista(artista: Artista): Observable<any>{
    return this.http.post<any>(this.url + 'guardar', artista, httpOptions);
  }
  getObtenerArtista(id: number){
    return this.http.get<Artista>(this.url + 'obtenerPorId/'+id);
  }
  getObtenerCancion(id: number) : Observable<any>{
    return this.http.get<Cancion>(this.url2 + 'obtenerPorId/'+id);
  }
}