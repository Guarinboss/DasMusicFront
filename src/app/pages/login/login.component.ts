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

  constructor(private router:Router, private loginService: RegistroLoginService) {

    this.loginForm = new FormGroup({
      nickname: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      contrasena: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    sessionStorage.setItem("usuario", "0") 
  }

  onFormSubmit(){
    let formularioLogin = this.loginForm.value;
    this.postIngresoLogin(formularioLogin);
  }

  postIngresoLogin(login: Login){    
    console.log(login);
    //sessionStorage.setItem("usuario", "1");
    //this.router.navigate(['/songs']);

    this.loginService.postLogin(login).subscribe(data =>{
      console.log(data);
      localStorage.setItem(environment.TOKEN, data);
      //sessionStorage.setItem("usuario", "1");      
      this.router.navigateByUrl('/artistas');
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

}
