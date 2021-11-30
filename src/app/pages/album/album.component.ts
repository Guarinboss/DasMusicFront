import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Album } from 'src/app/_model/Album';
import { Artista } from 'src/app/_model/Artista';
import { Artistas } from 'src/app/_model/Artistas';
import { ListasService } from 'src/app/_service/listas.service';
import { MusicaService } from 'src/app/_service/musica.service';

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

  dia: string;

  mes: string;

  anio: string;

  idArtista: any;

  formularioAlbum: FormGroup;
  formularioAlbumEdit: FormGroup;

  imgURL: any;

  artista: Artista;

  albumsArray: Album[];

  public message: string;

  public imagePath: any;

  sellersPermitFile: any;

  editField!: string;

  displayedColumns: string[] = ['position', 'weight', 'symbol', 'edit'];

  editAlbum: Album;

  mostrar = true;

  mostrar2 = false;

  mostrarEdit = true;
  mostrarEdit2 = false;

  //base64s
  sellersPermitString: string;

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

  constructor(private _snackBar: MatSnackBar,
              private musicaService: MusicaService,
              private listaUsuario: ListasService) {

    this.formularioAlbum = new FormGroup({
      dia: new FormControl(''),
      anio: new FormControl(''),
      nombre: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      fechaLanzamiento: new FormControl(this.anio+"-"+this.mes+"-"+this.dia),
      precio: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      imagen: new FormControl('', Validators.required),
      //gender: this.albumControl,
      //month: this.monthControl
    });
    this.formularioAlbumEdit = new FormGroup({
      id: new FormControl('', Validators.required),
      dia: new FormControl(''),
      anio: new FormControl(''),
      nombre: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      fechaLanzamiento: new FormControl(this.anio+"-"+this.mes+"-"+this.dia),
      precio: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      imagen: new FormControl('', Validators.required),
    });

    this.idArtista = localStorage.getItem("idArtista");
   }

  ngOnInit(): void {
    this.mostrar2 = false;
    this.getObtenerArtista(this.idArtista);
  }

  onFormSubmit() {
    this.getObtenerArtista(this.idArtista);
    let formularioAlbum = this.formularioAlbum.value;
    this.formularioAlbum.controls['fechaLanzamiento'].setValue(new Date(this.dia + "-" + this.mes + "-" + this.anio));
    console.log(formularioAlbum);
    setTimeout(() => {
      this.postGuardarAlbum(formularioAlbum);
    }, 1000);
  }

  onFormSubmit2() {
    this.getObtenerArtista(this.idArtista);
    let formularioAlbumEdit = this.formularioAlbumEdit.value;
    this.putEditarAlbum(formularioAlbumEdit);
    console.log(this.formularioAlbumEdit);
    setTimeout(() => {
      this.putEditarAlbum(formularioAlbumEdit);
    }, 1000);
  }

  postGuardarAlbum(album: Album) {
    let date: Date = new Date(this.anio+"-"+this.mes+"-"+this.dia); 
    album.artista = this.artista;
    album.fechaLanzamiento = date;
    album.numeroCanciones = 0;
    this.musicaService.postGuardarAlbum(album).subscribe(data => {
      console.log(data);
      this.openSnackBar("Album registrado!", "Aceptar");
    })
  }

  getObtenerArtista(id: any) {
    this.listaUsuario.getArtistasPorId(id).subscribe(data => {
      this.artista = data;
    })
  }

  getObtenerArtistaPorId() {
    this.listaUsuario.getArtistas
  }

  putEditarAlbum(album: Album) {
    this.musicaService.putEditarAlbum(album).subscribe(data => {
      console.log(data);
      this.getObtenerArtista(this.idArtista);
      this.mostrar2 = false;
    }, err => {
      if (err.status == 400) {
        //this.error = 'Usuario y/o cotrasena incorrecta';
        //this.progressbarService.barraProgreso.next("2");
      } else {
        //this.router.navigate([`/error/${err.status}/${err.statusText}`]);
      }
    })
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    //this.personList[id][property] = editField;
  }

  editarAlbum(album: Album) {
    this.mostrarEdit2 = true;
    this.editAlbum = album;
    //this.putEditarCancion(cancion);
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
    this.formularioAlbum.controls['imagen'].setValue(this.sellersPermitString);
  }

}
