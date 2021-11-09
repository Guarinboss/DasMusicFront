import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';

interface gender {
  value: string;
}

interface month {
  value: string;
}

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent implements OnInit {

  form: FormGroup;

  ArtistForm = new FormControl('', [Validators.required, Validators.email]);

  genders: gender[] = [
    {value: 'Música clásica'},
    {value: 'Blues'},
    {value: 'Jazz'},
    {value: 'Rhythm and Blues'},
    {value: 'Rock and Roll'},
    {value: 'Gospel'},
    {value: 'Soul'},
    {value: 'Rock'},
    {value: 'Metal'},
    {value: 'Hadcore punk'},
    {value: 'Country'},
    {value: 'Funk'},
    {value: 'Disco'},
    {value: 'House'},
    {value: 'Techno'},
    {value: 'Pop'},
    {value: 'Ska'},
    {value: 'Reggae'},
    {value: 'Drum and Bass'},
    {value: 'Garage'},
    {value: 'Flamenco'},
    {value: 'Salsa'},
    {value: 'Hip Hop'},
    {value: 'Reggaeton'},
    {value: 'Alternativa'},
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
    if (this.ArtistForm.hasError('required')) {
      return 'You must enter a value';
    }

    return this.ArtistForm.hasError('email') ? 'Not a valid email' : '';
  }

  genderControl = new FormControl(this.genders[0].value);
  monthControl = new FormControl(this.months[0].value);

  constructor() {
    this.form = new FormGroup({
      gender: this.genderControl,
      month: this.monthControl
    });
   }

  ngOnInit(): void {
  }

}
