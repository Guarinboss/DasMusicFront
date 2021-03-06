import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/_model/Login';
import { Usuarios } from 'src/app/_model/Usuarios';
import { RegistroLoginService } from 'src/app/_service/registro-login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;

  hide = true;
  loginForm: FormGroup;
  public loginContent : Usuarios[];



  constructor(private router:Router, public loginService: RegistroLoginService) {

    this.loginForm = new FormGroup({
      nickname: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      contrasena: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.error = "null"; 
    sessionStorage.removeItem(environment.TOKEN);
  }

  onFormSubmit(){

    this.postIngresoLogin(this.loginForm.value);
  }

  postIngresoLogin(login: Login){    
    console.log(login);

    this.loginService.postLogin(login).subscribe(data => {
      console.log(data);
      sessionStorage.setItem(environment.TOKEN, data.token);   
      sessionStorage.setItem("id",data.usuario);
      sessionStorage.setItem("usuario","1");
      this.router.navigateByUrl('/inicio')
    }, err => {
      if(err.status == 400){
        this.error = 'Usuario y/o cotrasena incorrecta';
      }
    })
  }

}
