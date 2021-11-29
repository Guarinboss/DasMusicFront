import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

interface album {
  name: string;
  date: string;
  image: string;
  price: string;
  artistName: string;
}

interface month {
  value: string;
}

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  form: FormGroup;

  Albums = new FormControl('', [Validators.required, Validators.email]);

  genders: album[] = [
    {name: 'Hellboy', date: "25/04/2004", image: "monda", price: "200", artistName:"lil peep"},
  ];

  months: month[] = [
    {value: 'Enero'},
    {value: 'Febrero'},
    {value: 'Marzo'},
    {value: 'Abril'},
    {value: 'Mayo'},
    {value: 'Junio'},
    {value: 'Julio'},
    {value: 'Agosto'},
    {value: 'Septiembre'},
    {value: 'Octubre'},
    {value: 'Noviembre'},
    {value: 'Diciembre'}
  ];

  getErrorMessage() {
    if (this.Albums.hasError('required')) {
      return 'You must enter a value';
    }

    return this.Albums.hasError('email') ? 'Not a valid email' : '';
  }

  albumControl = new FormControl(this.Albums.value);
  monthControl = new FormControl(this.months[0].value);

  constructor() {
    this.form = new FormGroup({
      gender: this.albumControl,
      month: this.monthControl
    });
   }

  ngOnInit(): void {
  }


}
