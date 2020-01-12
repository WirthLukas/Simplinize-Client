import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {LoginDTO} from '../_models/dto/dtoEntities';
import {Role} from '../_models/role';
import {CurrentUser} from '../_models/entities';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }


  logout() {
    localStorage.removeItem('currentUser');
  }

  setUser(user: CurrentUser) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUser(): CurrentUser {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
