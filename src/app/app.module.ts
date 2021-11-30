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
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './_service/AuthInterceptor';
import { environment } from 'src/environments/environment';
import { RegistroLoginService } from './_service/registro-login.service';
import { Login } from './_model/Login';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TrendingComponent } from './pages/trending/trending.component';

/**
 * Modulo donde se realizan importaciones de funcionalidad.
 * 
 * @module NgModule
 */
 export function jwtOptionsFactory() {
  return {
    tokenGetter: async () => {
      let tk = sessionStorage.getItem(environment.TOKEN);
      return tk;
      //return tk != null ? tk : '';
    },
    allowedDomains: ["localhost:8080"], ///TAMBIEN CAMBIAR IP AQUI
    disallowedRoutes: ["http://localhost:8080/DasMusic/api/auth/token",
      "http://localhost:8080/DasMusic/api/usuario/guardar"
    ],
  }
}
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
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    TrendingComponent,
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
    MatTabsModule,
    MatSnackBarModule,
    ImgFallbackModule,
    HttpClientModule,
    /*JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: []
      }
    }),*/

  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
