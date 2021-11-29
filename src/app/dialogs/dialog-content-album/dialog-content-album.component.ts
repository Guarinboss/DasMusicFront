import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Artistas } from 'src/app/_model/Artistas';
import { ListasService } from 'src/app/_service/listas.service';

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
  
  constructor(private router:Router, public listasService: ListasService) { }

  public artistas: Artistas[];
  
  onLoaded(isFallback: boolean) {
    // make somthing based on 'isFallback'
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.listasService.getArtistas().subscribe(data => {
        this.artistas = data;
        console.log(this.artistas);
      });
    }, 0.000);
  }

  displayedColumns: string[] = ['name', 'image'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  dirigirAlmbum(){
    this.router.navigate(['songs']);
  }

  

}
