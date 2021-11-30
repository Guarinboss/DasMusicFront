import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cancion } from '../_model/Cancion';


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
  getObtenerArtista(id: number){
    return this.http.get<Cancion[]>(this.url + 'obtenerPorIdArtista/'+id);
  }
  putEditar(cancion: Cancion) {
    return this.http.put<Cancion[]>(this.url + 'editar', cancion);
  }

  delete(id: any) {
    return this.http.delete(this.url + 'eliminarPorId/'+id);
  }
}
