import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { jsPDF } from "jspdf";
import { Albums } from 'src/app/_model/Albums';
import { Carrito } from 'src/app/_model/Carrito';
import { MusicaService } from 'src/app/_service/musica.service';

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();


export interface Album {
  nombre: string;
  image: string;
}


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  toppings: FormGroup;

  carrito: Carrito[];
  album : Albums;

  total : number;
  iva : number;
  sumaTotal : number;

  public albums: Album[] = [

    { nombre: 'Shakira', image: 'assets/images/A1.jpg'},
    { nombre: 'Twenty one pilots', image: 'assets/images/A2.jpg'},
    { nombre: 'Ramsteim', image: 'assets/images/A3.jpg'},
    { nombre: 'Lil peep', image: 'assets/images/A4.jpg'},
    { nombre: 'XTentacion', image: 'assets/images/A5.jpg'},
    { nombre: 'Juice wlrd', image: 'assets/images/A6.jpg'},
    { nombre: 'Dua lipa', image: 'assets/images/A7.jpg'},
    { nombre: 'Michael jackson', image: 'assets/images/A8.jpg'},
    { nombre: 'Joji', image: 'assets/images/A9.jpg'},
    { nombre: 'Cuco', image: 'assets/images/A10.jpg'},
    { nombre: 'Julito', image: 'assets/images/A11.jpg'},

];


  constructor(fb: FormBuilder, private musicaService: MusicaService) { 
    this.toppings = fb.group({
      pepperoni: false,
    });
    
    
  }

  public downloadPDF(): void {
    const doc = new jsPDF();

    doc.text('FACTURA', 90, 10);
    doc.text('Subtotal .......................................................................', 25, 30);
    doc.text('IVA ...............................................................................', 25, 40);
    doc.text('TOTAL .........................................................................', 25, 55);
    doc.text(this.total.toString()+'$', 160, 30);
    doc.text(this.iva.toString()+'$', 160, 40);
    doc.text(this.sumaTotal.toString()+'$', 160, 55);
    doc.text('DASMusic', 170, 290);
    doc.text('Gracias por su compra, ', 25, 275);
    doc.text('Estimado usuario.', 85, 275);
    doc.save('factura.pdf');
  }

  ngOnInit(): void {
    this.obteneralbums();
    this.obtenerCarro();
  }

  comprarCarrito(){
    this.downloadPDF();
  }
  
  obteneralbums(){
    this.musicaService.getObtenerAlbumPorId(15).subscribe(data => {
      console.log(data);
      this.album = data;
    });
  }

  obtenerCarro(){
    let id = sessionStorage.getItem("id");
    this.musicaService.getCarritoPorIdUser(id).subscribe(data => {
      console.log(data);
      this.carrito = data;
      let suma = 0; 
      this.carrito.forEach(element => {
        suma = suma+element.album.precio ;
        
      });
      this.total = suma;
      this.iva = this.total *0.19;
      this.sumaTotal = this.total + this.iva;
      console.log(this.total);
    })
  }
}
