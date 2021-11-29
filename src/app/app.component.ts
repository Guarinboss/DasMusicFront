import { Component, DoCheck } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogContentAlbumComponent } from './dialogs/dialog-content-album/dialog-content-album.component';
import { DialogContentArtistComponent } from './dialogs/dialog-content-artist/dialog-content-artist.component';
import { ListasService } from 'src/app/_service/listas.service';
import { Usuarios } from './_model/Usuarios';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

const permisos ={
  1: "Administrador"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck{

  
  usuario: any;
  prueba: any;
  public loginContent : Usuarios;

  constructor(public dialog: MatDialog,
              public listaservice: ListasService ){
    this.prueba = 1;
  } 
  ngDoCheck(): void {
    this.usuario = sessionStorage.getItem(environment.TOKEN);
  }

  ngOnInit(): void{
    this.obtenerUsuarios();
  }

  title = 'MusicStore';

  sidenavWidth = 18;
  ngStyle: string | undefined;
  

  decrease() {
    this.sidenavWidth = 5;

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentArtistComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    
  }

  openDialogAlbum() {
    const dialogRef = this.dialog.open(DialogContentAlbumComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    
  }

  obtenerUsuarios(){
    
    let currentUser = Number(sessionStorage.getItem('id'));
    this.listaservice.getUsuarios(currentUser).subscribe(async data => {
      this.loginContent = data;
      console.log(this.loginContent);
    });
  }

  validarRol(){
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.usuario);
    let rol = decodedToken.permisos;
    if (this.usuario == null){
      return false;
    }else if (rol[1] == permisos[1] ){
      return true;
    }else {
      return false;
    }
  }
  
}

