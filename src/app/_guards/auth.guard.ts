import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import {AuthenticationService} from "../_services/authentication.service";
import {Role} from "../_models/role";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {}


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const currentUser = this.authenticationService.getUser();

    let decodeToken = this.jwtHelper.decodeToken(currentUser.token);
    console.log(decodeToken.role);


    if(currentUser) {
      if (!this.isAuthenticated() || (next.data.roles.indexOf(currentUser) < 0)) { //currentUser.roles
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});

        let decodeToken = this.jwtHelper.decodeToken(currentUser.token);
        console.log(decodeToken.role);

        return false;
      }
    }

    return true;
  }

   isAuthenticated(): boolean {

    const currentUser = this.authenticationService.getUser();

    if(!currentUser) {
      return false;
    }

    return !this.jwtHelper.isTokenExpired(currentUser.token);
  }

}
