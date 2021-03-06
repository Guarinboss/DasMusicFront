import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArtistasComponent } from '../pages/artistas/artistas.component';
import { Artista } from '../_model/Artista';
import { Artistas } from '../_model/Artistas';
import { Login } from '../_model/Login';
import { Registro } from '../_model/Registro';
import { Usuarios } from '../_model/Usuarios';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListasService {

    /**
  * Variable que almacena la URL.
  */
 private url: string = `${environment.HOST}/artistas/`;
 private url2: string = `${environment.HOST}/usuarios/`;

  constructor(private http: HttpClient) { }

  getArtistas(){
    return this.http.get<Artista[]>(this.url + 'obtener');
  }

  getArtistasPorId(id: number) {
    return this.http.get<Artista>(this.url + 'obtenerPorId/' + id + '');
  }

  getUsuarios(id: number){
    return this.http.get<Usuarios>(this.url2 + 'obtenerPorId/'+id+'');
  }

  putArtistas(artistas: Artistas): Observable<any>{
    return this.http.put<any>(this.url + 'editar', artistas);
  }

  deleteArtistas(id: number){
    return this.http.delete<any>(this.url + 'eliminarPorId/'+id+'');
  }

  
}
