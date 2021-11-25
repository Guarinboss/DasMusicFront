import { Component, OnInit } from '@angular/core';

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
      { name: 'Julito', image: 'assets/images/A11.jpg'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
