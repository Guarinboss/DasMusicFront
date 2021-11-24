import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { AlbumComponent } from './pages/album/album.component';
import {MatTableModule} from '@angular/material/table';
import { DialogContentArtistComponent } from './dialogs/dialog-content-artist/dialog-content-artist.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SongsComponent } from './pages/songs/songs.component';
import { DialogContentAlbumComponent } from './dialogs/dialog-content-album/dialog-content-album.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PerfilArtistaComponent } from './pages/perfil-artista/perfil-artista.component';
import { PerfilAlbumComponent } from './pages/perfil-album/perfil-album.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { DialogContentCarritoComponent } from './dialogs/dialog-content-carrito/dialog-content-carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistasComponent,
    AlbumComponent,
    DialogContentArtistComponent,
    SongsComponent,
    DialogContentAlbumComponent,
    BibliotecaComponent,
    PerfilArtistaComponent,
    PerfilAlbumComponent,
    CarritoComponent,
    DialogContentCarritoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
