import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LoginDTO} from "../_models/dto/dtoEntities";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  login(loginDto: LoginDTO) {
    return this.http.post(environment.api + '/auth/login', loginDto);
  }

  addSkiTeacher() {
    return this.http.post(environment.api + '/auth/addSkiTeacher', null);
  }

  registerContactPerson() {
    return this.http.post(environment.api + '/auth/registerContactPerson', null);
  }

  assignCourse() {
    return this.http.post(environment.api + '/app/assignCourse', null);
  }

  createGroup() {
    return this.http.post(environment.api + '/app/createGroup', null);
  }

  addTeacherToGroup(skiTeacherId: number, groupId: number) {

    const params = new HttpParams();
    params.append("skiTeacherId", skiTeacherId.toLocaleString());
    params.append("groupId", groupId.toLocaleString())

    return this.http.post(environment.api + '/app/addTeacherToGroup', null, {params});
  }

  getAllGroups(courseId: number) {

    const params = new HttpParams();
    params.append("courseId", courseId.toLocaleString());

    return this.http.get(environment.api + '/app/getAllGroups', {params});
  }

  getAllMembers(courseId: number) {

    const params = new HttpParams();
    params.append("courseId", courseId.toLocaleString());

    return this.http.get(environment.api + '/app/getAllMembers', {params})
  }

  getSkiTeachers() {

    return this.http.get(environment.api + '/app/getSkiTeachers')
  }

  addChildrenToCourse(studentId: number, courseId: number) {

    const params = new HttpParams();
    params.append("studentId", studentId.toLocaleString());
    params.append("courseId", courseId.toLocaleString());

    return this.http.post(environment.api + '/app/addChildrenToCourse',null,{params})

  }

  registerChildren() {

    return this.http.post(environment.api + '/app/registerChildren', null);
  }



}
