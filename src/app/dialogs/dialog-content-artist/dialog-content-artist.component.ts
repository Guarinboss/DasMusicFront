import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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
  selector: 'app-dialog-content-artist',
  templateUrl: './dialog-content-artist.component.html',
  styleUrls: ['./dialog-content-artist.component.css']
})
export class DialogContentArtistComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'image'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  dirigirAlmbum(){
    this.router.navigate(['album']);
  }

}
