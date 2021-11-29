import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Albums } from 'src/app/_model/Albums';
import { MusicaService } from 'src/app/_service/musica.service';

export interface Album {
  name: string;
  image: string;
}

const ELEMENT_DATA: Album[] = [
  { name: 'Shakira', image: 'assets/images/A1.jpg'},
  { name: 'Twenty one pilots', image: 'assets/images/A2.jpg'},
  { name: 'Ramsteim', image: 'assets/images/A3.jpg'},
  { name: 'Lil peep', image: 'assets/images/A4.jpg'},
  { name: 'XTentacion', image: 'assets/images/A5.jpg'},
  { name: 'Juice wlrd', image: 'assets/images/A6.jpg'},
  { name: 'Dua lipa', image: 'assets/images/A7.jpg'},
  { name: 'Michael jackson', image: 'assets/images/A8.jpg'},
  { name: 'Joji', image: 'assets/images/A9.jpg'},
  { name: 'Cuco', image: 'assets/images/A10.jpg'},
];

@Component({
  selector: 'app-dialog-content-album',
  templateUrl: './dialog-content-album.component.html',
  styleUrls: ['./dialog-content-album.component.css']
})
export class DialogContentAlbumComponent implements OnInit {

  public albums: Albums[];
  
  constructor(private router:Router, private musicaService: MusicaService) { }

  ngOnInit(): void {
    this.getObtenerAlbums();
  }

  displayedColumns: string[] = ['name', 'image'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  dirigirAlmbum(id: any){
    //localStorage.setItem("idArtista", idArtista);
    localStorage.setItem("idAlbum", id);
    this.router.navigate(['songs']);
  }

  getObtenerAlbums(){
    this.musicaService.getObtenerAlbums().subscribe(data => {
      console.log(data);
      this.albums = data;
      /*this.canciones.forEach(element => {
        let objectURL = 'data:image/jpg;base64,' + element.imagen;
        element.imagen = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      });
      console.log(this.canciones);*/
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

}
