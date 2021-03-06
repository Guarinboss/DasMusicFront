import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatTable } from '@angular/material/table';
import { DialogContentCarritoComponent } from 'src/app/dialogs/dialog-content-carrito/dialog-content-carrito.component';
import { Albums } from 'src/app/_model/Albums';
import { Cancion } from 'src/app/_model/Cancion';
import { Carrito } from 'src/app/_model/Carrito';
import { MusicaService } from 'src/app/_service/musica.service';
import { ListasService } from 'src/app/_service/listas.service';
import { Usuarios } from 'src/app/_model/Usuarios';
import { CancionService } from 'src/app/_service/cancion.service';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
}

export interface Album {
  name: string;
  image: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: '2:30', name: 'Joji', weight: 1.007, symbol: 'Run'},
  {position: '2:34', name: 'Cuco', weight: 4.002, symbol: 'Hydrocodone'},
  {position: '2:56', name: 'Xtentacion', weight: 6.941, symbol: 'The remedy for a broken heart'},
  {position: '3:12', name: 'Homreshake', weight: 9.012, symbol: 'Just like my'},
  {position: '2:12', name: 'Juice', weight: 10.811, symbol: 'Hate the other side'},
  {position: '5:12', name: 'Post malone', weight: 12.007, symbol: 'Circles'},
  {position: '4:23', name: 'Travis', weight: 14.006, symbol: 'Goosebumps'},
  {position: '2:39', name: 'Lil tecca', weight: 15.994, symbol: 'Ransom'},
  {position: '1:56', name: 'Selena gomez', weight: 18.984, symbol: 'Love you like love a song'},
  {position: '3:02', name: 'Dua lipa', weight: 20.179, symbol: 'Break my heart'},
];

@Component({
  selector: 'app-perfil-album',
  templateUrl: './perfil-album.component.html',
  styleUrls: ['./perfil-album.component.css']
})
export class PerfilAlbumComponent implements OnInit {

  editField!: string;

  public albums: Albums[] /*= [

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

];*/

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [...ELEMENT_DATA];

  idAlbum: any;
  album: Albums;
  usuario : Usuarios;
  canciones: Cancion[];

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger;

  constructor(public dialog: MatDialog,
              private musicaService: MusicaService,
              private listas : ListasService,
              public cancionService: CancionService) {
    this.idAlbum = localStorage.getItem("idAlbumPerfil");
  }

  onLoaded(isFallback: boolean) {
    // make somthing based on 'isFallback'
  }


  openDialogCancion() {
    this.dialog.open(DialogContentCarritoComponent, {
      height: '300px',
      width: '450px',
    });
  }

  openDialogAlbum(id: any) {
    this.dialog.open(DialogContentCarritoComponent, {
      height: '300px',
      width: '450px',
    });
    this.guardarCarrito();
  }

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  guardarCarrito(){
    let carrito = new Carrito;
    carrito.album = this.album;
    carrito.usuario = this.usuario;
    //carrito.cancion = this.canciones
    this.musicaService.postGuardarCarrito(carrito).subscribe(data => {
      console.log(data);
    })
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


  ngOnInit(): void {
    this.getAlbumPorId(this.idAlbum);
    this.getAlbum();
    this.getUsuario();
  }


  getAlbumPorId(id: any){
    this.musicaService.getObtenerAlbumPorId(id).subscribe(data =>{
      console.log(data);
      this.album = data;
     // this.canciones = this.album.cancions;
      console.log(this.canciones);
      this.getObtenerPorAlbum(this.album.id);
    })
  }

  getObtenerPorAlbum(id: number) {
    this.cancionService.getObtenerPorAlbum(id).subscribe(data => {
      console.log(data);  
      this.canciones = data;
    }, err => {
      if (err.status == 400) {
        //this.error = 'Usuario y/o cotrasena incorrecta';
        //this.progressbarService.barraProgreso.next("2");
      } else {
        //this.router.navigate([`/error/${err.status}/${err.statusText}`]);
      }
    })
  }

  getAlbum(){
    this.musicaService.getObtenerAlbums().subscribe(data =>{
      console.log(data);
      this.albums = data;
    })
  }

  getUsuario(){
    let id = Number(sessionStorage.getItem("id"));
    this.listas.getUsuarios(id).subscribe(data =>{
      this.usuario = data; 
      console.log(data);
    })
  }


}
