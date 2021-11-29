import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

const permisos ={
  1: "Administrador"
};

@Injectable({
  providedIn: 'root'
})
export class GuardianService implements CanActivate {

  token: any;
  constructor(private router: Router) {
    this.token = sessionStorage.getItem(environment.TOKEN);
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.token = sessionStorage.getItem(environment.TOKEN);
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.token);
    let rol = decodedToken.permisos;

    let url = state.url;
    if (url.includes('/songs') && (rol[1] == permisos[1] )){
      return true;
    }else if (url.includes('/artistas') && (rol[1] == permisos[1] )){
      return true;
    }else if (url.includes('/album') && (rol[1] == permisos[1] )){
      return true;
    }else {
      this.router.navigate(['/biblioteca']);
    }
    return false;
  }
}
