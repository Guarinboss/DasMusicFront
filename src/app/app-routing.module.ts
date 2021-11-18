import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './pages/album/album.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SongsComponent } from './pages/songs/songs.component';

const routes: Routes = [
  {path : 'artistas', component:ArtistasComponent},
  {path : 'album', component:AlbumComponent},
  {path : 'songs', component:SongsComponent},
  {path : 'login', component:LoginComponent},
  {path : 'registro', component:RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
