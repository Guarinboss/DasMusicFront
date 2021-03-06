import { Component, OnInit } from '@angular/core';
import { Artistas } from 'src/app/_model/Artistas';
import { ListasService } from 'src/app/_service/listas.service';
import { Cancion } from 'src/app/_model/Cancion';
import { CancionService } from 'src/app/_service/cancion.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Artista } from 'src/app/_model/Artista';
import { Router } from '@angular/router';
import { Albums } from 'src/app/_model/Albums';
import { MusicaService } from 'src/app/_service/musica.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentArtistComponent } from 'src/app/dialogs/dialog-content-artist/dialog-content-artist.component';

export interface Album {
  name: string;
  image: string;
}


@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})


export class BibliotecaComponent implements OnInit {

  public artistas: Artistas[];

  public artista: Artista[];

  public canciones: Cancion[];

  public album: Albums[];

  placeholder = 'assets/images/P1.jpg';

  public albums: Album[] = [

    { name: 'Shakira', image: 'assets/images/A1.jpg' },
    { name: 'Twenty one pilots', image: 'assets/images/A2.jpg' },
    { name: 'Ramsteim', image: 'assets/images/A3.jpg' },
    { name: 'Lil peep', image: 'assets/images/A4.jpg' },
    { name: 'XTentacion', image: 'assets/images/A5.jpg' },
    { name: 'Juice wlrd', image: 'assets/images/A6.jpg' },
    { name: 'Dua lipa', image: 'assets/images/A7.jpg' },
    { name: 'Michael jackson', image: 'assets/images/A8.jpg' },
    { name: 'Joji', image: 'assets/images/A9.jpg' },
    { name: 'Cuco', image: 'assets/images/A10.jpg' },
    { name: 'Julito', image: 'assets/images/A110.jpg' },

  ];

  constructor(private listasService: ListasService,
    private cancionService: CancionService,
    private router: Router,
    private musicaService: MusicaService,
    public dialog: MatDialog) { }

  onLoaded(isFallback: boolean) {
    // make somthing based on 'isFallback'
  }



  ngOnInit(): void {


    setTimeout(() => {
      this.getCancion();
      this.getArtista();
      this.getAlbum();
      this.listasService.getArtistas().subscribe(data => {
        this.artista = data;
        console.log(this.artista);
      });
    }, 0.000);

  }

  getCancion() {
    this.cancionService.getObtener().subscribe(data => {
      console.log(data);
      this.canciones = data;
    }, err => {
      //console.log(err);
      if (err.status == 400) {
        //this.error = 'Usuario y/o cotrasena incorrecta';
        //this.progressbarService.barraProgreso.next("2");
      } else {
        //this.router.navigate([`/error/${err.status}/${err.statusText}`]);
      }
    });
  }
  getArtista() {
    this.musicaService.getObtenerArtistas().subscribe(data => {
      console.log(data);
      this.artista = data;

      /*this.canciones.forEach(element => {
        let objectURL = 'data:image/jpg;base64,' + element.imagen;
        element.imagen = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      
      console.log(this.canciones);*/
    });
  }
  getAlbum() {
    this.musicaService.getObtenerAlbums().subscribe(data => {
      console.log(data);
      this.album = data;
    }, err => {
      //console.log(err);
      if (err.status == 400) {
        //this.error = 'Usuario y/o cotrasena incorrecta';
        //this.progressbarService.barraProgreso.next("2");
      } else {
        //this.router.navigate([`/error/${err.status}/${err.statusText}`]);
      }
    });
  }

  perfilArtista(id: any) {
    localStorage.setItem("idArtistaPerfil", id);
    this.router.navigate(['/perfilArtista']);
  }

  perfilAlbum(id: any) {
    localStorage.setItem("idAlbumPerfil", id);
    this.router.navigate(['/perfilAlbum']);
  }
}
