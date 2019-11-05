import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(credentials: string, password: string) {

  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
