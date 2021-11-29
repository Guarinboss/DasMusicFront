import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();


export interface Album {
  name: string;
  image: string;
}


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  toppings: FormGroup;

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


  constructor(fb: FormBuilder) { 
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
    doc.text('15.000$', 160, 30);
    doc.text('3.000$', 160, 40);
    doc.text('18.000$', 160, 55);
    doc.text('DASMusic', 170, 290);
    doc.text('Gracias por su compra, ', 25, 275);
    doc.text('David Caballero.', 85, 275);
    doc.save('factura.pdf');
  }

  ngOnInit(): void {
  }

  comprarCarrito(){
    this.downloadPDF();
  }

}
