import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LoginDTO} from "../_models/dto/dtoEntities";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  test() {
    return this.http.get(environment.api + '/app/getChildren',);
  }

  login(loginDto: LoginDTO) {
    return this.http.post(environment.api, loginDto);
  }

  register() {
    return this.http.post(environment.api, null);
  }
}
