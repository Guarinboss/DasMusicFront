import { Component, DoCheck } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogContentAlbumComponent } from './dialogs/dialog-content-album/dialog-content-album.component';
import { DialogContentArtistComponent } from './dialogs/dialog-content-artist/dialog-content-artist.component';
import { ListasService } from 'src/app/_service/listas.service';
import { Usuarios } from './_model/Usuarios';
import { Router } from '@angular/router';
import { RegistroLoginService } from './_service/registro-login.service';

const token ={
  id: 1,
  token: ""
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
              public listaservice: ListasService,
              private router: Router,
              private registroLoginService: RegistroLoginService, ){
    this.prueba = 1;
  } 
  ngDoCheck(): void {
    this.usuario = sessionStorage.getItem("usuario");
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

  cerrarSesion(){
    let currentUser = Number(sessionStorage.getItem('id'));
    let tokenUser = String(sessionStorage.getItem('access_token'));
    token.token = tokenUser;
    this.registroLoginService.postCerrarSesion(token).subscribe(async data => {
      console.log(token);
      sessionStorage.clear();
      this.router.navigate(['login']);
    });
    
  }

  
}

