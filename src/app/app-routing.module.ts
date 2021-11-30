import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './pages/album/album.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PerfilAlbumComponent } from './pages/perfil-album/perfil-album.component';
import { PerfilArtistaComponent } from './pages/perfil-artista/perfil-artista.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SongsComponent } from './pages/songs/songs.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GuardianService } from './_service/guardian.service';
import { TrendingComponent } from './pages/trending/trending.component';

const routes: Routes = [
  {path : 'artistas', component:ArtistasComponent, canActivate: [GuardianService]},
  {path : 'album', component:AlbumComponent, canActivate: [GuardianService]},
  {path : 'songs', component:SongsComponent, canActivate: [GuardianService]},
  {path : 'biblioteca', component:BibliotecaComponent},
  {path : 'trending', component:TrendingComponent},
  {path : 'perfilArtista', component:PerfilArtistaComponent},
  {path : 'perfilAlbum', component:PerfilAlbumComponent},
  {path : 'carrito', component:CarritoComponent},
  {path : 'login', component:LoginComponent},
  {path : 'registro', component:RegistroComponent},
  {path : 'inicio', component:InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
