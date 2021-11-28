import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/_model/Login';
import { RegistroLoginService } from 'src/app/_service/registro-login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;

  constructor(private router:Router, public loginService: RegistroLoginService) {

    this.loginForm = new FormGroup({
      nickname: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      contrasena: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    sessionStorage.setItem("usuario", "0") 
  }

  onFormSubmit(){

    this.postIngresoLogin(this.loginForm.value);
  }

  postIngresoLogin(login: Login){    
    console.log(login);

    this.loginService.postLogin(login).subscribe(data => {
      console.log(data);
      sessionStorage.setItem(environment.TOKEN, data.token);
      sessionStorage.setItem("usuario", "1");      
      this.router.navigateByUrl('/artistas')
    })
  }

}
