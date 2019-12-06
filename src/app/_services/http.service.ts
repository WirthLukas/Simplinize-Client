import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  test() {
    return this.http.get(environment.api + '/app/test',{responseType: "text"});
  }

  login() {
    return this.http.post(environment.api, null);
  }

  register() {
    return this.http.post(environment.api, null);
  }
}
