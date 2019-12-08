import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {LoginDTO} from "../_models/dto/dtoEntities";
import {Role} from "../_models/role";
import {CurrentUser} from "../_models/entities";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpService: HttpService) { }

  login(credentials: string, password: string) {

    const loginDto = new LoginDTO(credentials, password, Role.SKITEACHER);

    this.httpService.login(loginDto).subscribe(data => {

    });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  getUser(): CurrentUser {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
