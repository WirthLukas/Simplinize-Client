import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpService: HttpService) { }

  login(credentials: string, password: string) {

      this.httpService.login().subscribe();
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
