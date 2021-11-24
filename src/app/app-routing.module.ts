import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './pages/album/album.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PerfilAlbumComponent } from './pages/perfil-album/perfil-album.component';
import { PerfilArtistaComponent } from './pages/perfil-artista/perfil-artista.component';
import { SongsComponent } from './pages/songs/songs.component';

const routes: Routes = [
  {path : 'artistas', component:ArtistasComponent},
  {path : 'album', component:AlbumComponent},
  {path : 'songs', component:SongsComponent},
  {path : 'biblioteca', component:BibliotecaComponent},
  {path : 'perfilArtista', component:PerfilArtistaComponent},
  {path : 'perfilAlbum', component:PerfilAlbumComponent},
  {path : 'carrito', component:CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
