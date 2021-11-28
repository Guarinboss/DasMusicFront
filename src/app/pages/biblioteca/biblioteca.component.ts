import { Component, OnInit } from '@angular/core';
import { Cancion } from 'src/app/_model/Cancion';
import { CancionService } from 'src/app/_service/cancion.service';
import { DomSanitizer } from '@angular/platform-browser';

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
    { name: 'Julito', image: 'assets/images/A11.jpg' },

  ];


  public canciones: Cancion[];

  constructor(private cancionService: CancionService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getCancion();
    }, 3000);
  }

  getCancion() {
    this.cancionService.getObtener().subscribe(data => {
      console.log(data);
      this.canciones = data;
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
