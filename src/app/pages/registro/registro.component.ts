import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Registro } from 'src/app/_model/Registro';
import { RegistroLoginService } from 'src/app/_service/registro-login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  hide = true;
  hide2 = true;
  registroForm: FormGroup;

  constructor(private router: Router, 
              private _snackBar: MatSnackBar,
              private registroService: RegistroLoginService) {
    this.registroForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      apellido: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      cedula: new FormControl('', [Validators.required]),
      nickname: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      correo: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      contrasena: new FormControl('', Validators.required),
      contrasena2: new FormControl('', Validators.required)
    })    
  }

  ngOnInit(): void {
  }

  onFormSubmit() {
    let formularioRegistro = this.registroForm.value;
    this.postRegistro(formularioRegistro);
  }

  postRegistro(registro: Registro) {
    console.log(registro);
    //this.router.navigate(['/login']);    

    this.registroService.postRegistro(registro).subscribe(data =>{
      console.log(data);
      this.openSnackBar("Registro exitoso","Aceptar");
      this.router.navigate(['/login']);
    }, err =>{
      //console.log(err);
      if(err.status == 400) {
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

}
