import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from '../_model/Album';
import { Albums } from '../_model/Albums';
import { Artista } from '../_model/Artista';
import { Cancion } from '../_model/Cancion';
import { Carrito } from '../_model/Carrito';
import { View_Artista } from '../_model/View_Artista';

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

  private url3: string = `${environment.HOST}/album/`;

  private url4: string = `${environment.HOST}/carrito/`;

  constructor(private http: HttpClient) { }

  getObtenerArtista(id: number){
    return this.http.get<Artista>(this.url + 'obtenerPorId/'+id);
  }
  getObtenerViewArtista(){
    return this.http.get<View_Artista[]>(this.url + 'obtenerView');
  }

  getObtenerArtistas(){
    return this.http.get<Artista[]>(this.url + 'obtener');
  }
  getObtenerCancion(id: number) : Observable<any>{
    return this.http.get<Cancion>(this.url2 + 'obtenerPorId/'+id);
  }
  /*getObtenerCancion(id: number) : Observable<any>{
    return this.http.get<Cancion>(this.url2 + 'obtenerPorId/'+id);
  }*/

  postGuardarArtista(artista: Artista): Observable<any>{
    return this.http.post<any>(this.url + 'guardar', artista, httpOptions);
  }

  postGuardarAlbum(album: Album): Observable<any> {
    return this.http.post<any>(this.url3 + 'guardar', album, httpOptions);
  }

  putEditarAlbum(album: Album) {
    return this.http.put<Album>(this.url3 + 'editar', album);
  }
  
  getObtenerAlbums(){
    return this.http.get<Albums[]>(this.url3 + 'obtener');
  }

  getObtenerAlbumPorId(id: number){
    return this.http.get<Albums>(this.url3 + 'obtenerPorId/'+id);
  }  

  getObtenerAlbumPorIdArtista(id: number){
    return this.http.get<Albums[]>(this.url3 + 'obtenerPorIdArtista/'+id);
  }

  deleteAlbum(id: number){
    return this.http.delete(this.url3 + 'eliminarPorId/'+id);
  }
  
  postGuardarCarrito(carrito: Carrito){
    return this.http.post<any>(this.url4 + 'guardar', carrito);
  }
  

  getCarritoPorIdUser(id: any){
    return this.http.get<any>(this.url4 + 'obtenerPorIdUsuario/'+id);
  }
  

}
