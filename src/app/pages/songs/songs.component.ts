import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Cancion } from 'src/app/_model/Cancion';
import { CancionService } from 'src/app/_service/cancion.service';
import { environment } from 'src/environments/environment';


export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
}
interface month {
  value: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: '2:30', name: 'Joji', weight: 1.007, symbol: 'Run' },
  { position: '2:34', name: 'Cuco', weight: 4.002, symbol: 'Hydrocodone' },
  { position: '2:56', name: 'Xtentacion', weight: 6.941, symbol: 'The remedy for a broken heart' },
  { position: '3:12', name: 'Homreshake', weight: 9.012, symbol: 'Just like my' },
  { position: '2:12', name: 'Juice', weight: 10.811, symbol: 'Hate the other side' },
  { position: '5:12', name: 'Post malone', weight: 12.007, symbol: 'Circles' },
  { position: '4:23', name: 'Travis', weight: 14.006, symbol: 'Goosebumps' },
  { position: '2:39', name: 'Lil tecca', weight: 15.994, symbol: 'Ransom' },
  { position: '1:56', name: 'Selena gomez', weight: 18.984, symbol: 'Love you like love a song' },
  { position: '3:02', name: 'Dua lipa', weight: 20.179, symbol: 'Break my heart' },
];


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  public imagePath: any;

  imgURL: any;

  public message: string;

  public extension: any;

  sellersPermitFile: any;

  //base64s
  sellersPermitString: string;

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

  getErrorMessage() {
    if (this.Canciones.hasError('required')) {
      return 'You must enter a value';
    }

    return this.Canciones.hasError('email') ? 'Not a valid email' : '';
  }

  editField!: string;

  formCancion: FormGroup;
  formFecha: FormGroup;

  Canciones = new FormControl('', [Validators.required, Validators.email]);

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [...ELEMENT_DATA];

  mostrar = true;
  mostrar2 = false;

  dia1: any; mes1: any; anio1: any;

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

  albumControl = new FormControl(this.Canciones.value);
  monthControl = new FormControl(this.months[0].value);

  constructor(private cancionService: CancionService) {

    this.formCancion = new FormGroup({
      nombre: new FormControl('', Validators.required),
      fechaLanzamiento: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      duracion: new FormControl('', Validators.required),
      imagen: new FormControl('', Validators.required),
    });

    this.formFecha = new FormGroup({
      dia: new FormControl('', Validators.required),
      mes: new FormControl('', Validators.required),
      anio: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.mostrar2 = false;
  }

  onFromSubmit() {
    this.formCancion.controls['fechaLanzamiento'].setValue(new Date(this.dia1 + "-" + this.mes1 + "-" + this.anio1));
    let formularioCancion = this.formCancion.value;
    this.postGuardar(formularioCancion);
  }

  postGuardar(cancion: Cancion) {
    console.log(cancion);
    //sessionStorage.setItem("usuario", "1");
    //this.router.navigate(['/songs']);

    this.cancionService.postGuardar(cancion).subscribe(data => {
      console.log(data);
      //sessionStorage.setItem("usuario", "1");      
      this.mostrar2 = false;
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

  cancelar() {
    this.mostrar2 = false;
  }

  addData() {
    //const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    //this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    //this.table.renderRows();
    this.mostrar2 = true;
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    //this.personList[id][property] = editField;
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
    this.formCancion.controls['imagen'].setValue(this.sellersPermitString);
  }
}
