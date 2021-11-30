import { Component, OnInit } from '@angular/core';
import { Cancion } from 'src/app/_model/Cancion';
import { View_Artista } from 'src/app/_model/View_Artista';
import { MusicaService } from 'src/app/_service/musica.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {


  artistas: View_Artista[];

  constructor(private musicaService: MusicaService) { }

  ngOnInit(): void {
    this.getObtenerViewArtista();
  }


  getObtenerViewArtista(){
    this.musicaService.getObtenerViewArtista().subscribe(data =>{
      this.artistas = data;
    })
  }
}
