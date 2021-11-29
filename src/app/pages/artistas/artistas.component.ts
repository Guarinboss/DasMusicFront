import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Artista } from 'src/app/_model/Artista';
import { MusicaService } from 'src/app/_service/musica.service';

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

  formFecha: FormGroup;

  formularioArtista: FormGroup;

  ArtistForm = new FormControl('', [Validators.required, Validators.email]);

  dia: string;
  mes: string;
  anio: string;

  public imagePath: any;

  imgURL: any;

  public message: string;

  public extension: any;

  sellersPermitFile: any;

  //base64s
  sellersPermitString: string;

  genders: gender[] = [
    { value: 'Música clásica' },
    { value: 'Blues' },
    { value: 'Jazz' },
    { value: 'Rhythm and Blues' },
    { value: 'Rock and Roll' },
    { value: 'Gospel' },
    { value: 'Soul' },
    { value: 'Rock' },
    { value: 'Metal' },
    { value: 'Hadcore punk' },
    { value: 'Country' },
    { value: 'Funk' },
    { value: 'Disco' },
    { value: 'House' },
    { value: 'Techno' },
    { value: 'Pop' },
    { value: 'Ska' },
    { value: 'Reggae' },
    { value: 'Drum and Bass' },
    { value: 'Garage' },
    { value: 'Flamenco' },
    { value: 'Salsa' },
    { value: 'Hip Hop' },
    { value: 'Reggaeton' },
    { value: 'Alternativa' },
  ];

  months: month[] = [
    { value: 'Enero' },
    { value: 'Febrero' },
    { value: 'Marzo' },
    { value: 'Abril' },
    { value: 'Mayo' },
    { value: 'Junio' },
    { value: 'Julio' },
    { value: 'Agosto' },
    { value: 'Septiembre' },
    { value: 'Octubre' },
    { value: 'Noviembre' },
    { value: 'Diciembre' }
  ];

  /*months: month[] = [
    { value: '01' },
    { value: '02' },
    { value: '03' },
    { value: '04' },
    { value: '05' },
    { value: '06' },
    { value: '07' },
    { value: '08' },
    { value: '09' },
    { value: '10' },
    { value: '11' },
    { value: '12' }
  ];+*/

  getErrorMessage() {
    if (this.ArtistForm.hasError('required')) {
      return 'You must enter a value';
    }

    return this.ArtistForm.hasError('email') ? 'Not a valid email' : '';
  }
  
  monthControl = new FormControl(this.months[0].value);

  constructor(private router: Router,
              private _snackBar: MatSnackBar,
              private musicaService: MusicaService) {

    this.formularioArtista = new FormGroup({
      dia: new FormControl(''),
      anio: new FormControl(''),
      imagen: new FormControl(''),
      generoMusical: new FormControl(''),
      fechaNacimiento: new FormControl(this.anio+"-"+this.mes+"-"+this.dia),
      nombre: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      nacionalidad: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    })


  }

  ngOnInit(): void {
  }

  onFormSubmit() {
    let formularioArtista = this.formularioArtista.value;
    this.postGuardarArtista(formularioArtista);
  }

  postGuardarArtista(artista: Artista) {
    console.log(artista);
    let date: Date = new Date(this.anio+"-"+this.mes+"-"+this.dia); 
    //let date: Date = new Date(date);  
    artista.fechaNacimiento = date;
    this.musicaService.postGuardarArtista(artista).subscribe(data => {
      console.log(data);
      this.openSnackBar("¡Artista registrado!", "Aceptar");
      this.router.navigate(['/biblioteca']);
    }, err => {
      //console.log(err);
      if (err.status == 400) {
        //this.error = 'Usuario y/o cotrasena incorrecta';
        //this.progressbarService.barraProgreso.next("2");
      } else {
        //this.router.navigate([`/error/${err.status}/${err.statusText}`]);
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  preview(event: any): void {
    let files: FileList = event.target.files;

    if (files.length == 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }

    this.picked(event);
  }

  public picked(event: any) {
    let fileList: FileList = event.target.files;
    const file: File = fileList[0];
    this.sellersPermitFile = file;
    this.handleInputChange(file); //turn into base64   
  }

  handleInputChange(files: any) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    console.log(file);
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
    //let extensioNueva = this.valiadarFormato(file.type);
    //console.log(extensioNueva);
  }

  _handleReaderLoaded(e: any) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    //this.imageSrc = base64result;
    this.sellersPermitString = base64result;
    console.log(this.sellersPermitString);
    this.log();
  }

  log() {
    this.formularioArtista.controls['imagen'].setValue(this.sellersPermitString);
  }

}
