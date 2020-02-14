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

  createGroup(courseId: number) {
    const params = new HttpParams();
    params.set("courseId", courseId.toLocaleString());

    return this.http.post(environment.api + '/app/createGroup', null, {params});
  }

  addTeacherToGroup(skiTeacherId: number, groupId: number) {

    const params = new HttpParams();
    params.set("skiTeacherId", skiTeacherId.toLocaleString());
    params.set("groupId", groupId.toLocaleString())

    return this.http.post(environment.api + '/app/addTeacherToGroup', null, {params});
  }

  getAllGroups(courseId: number) {

    const params = new HttpParams();
    params.set("courseId", courseId.toLocaleString());

    return this.http.get(environment.api + '/app/getAllGroups', {params});
  }

  getAllMembers(courseId: number) {

    const params = new HttpParams();
    params.set("courseId", courseId.toLocaleString());

    return this.http.get(environment.api + '/app/getAllMembers', {params})
  }

  getSkiTeachers() {

    return this.http.get(environment.api + '/app/getSkiTeachers')
  }

  addChildrenToCourse(studentId: number, courseId: number) {

    const params = new HttpParams();
    params.set("studentId", studentId.toLocaleString());
    params.set("courseId", courseId.toLocaleString());

    return this.http.post(environment.api + '/app/addChildrenToCourse',null,{params})

  }

  registerChildren() {

    return this.http.post(environment.api + '/app/registerChildren', null);
  }

  getGroupParticipations(groupId: number) {

    const params = new HttpParams();
    params.set("groupId", groupId.toLocaleString());
    return this.http.get(environment.api + '/app/getGroupParticipations', {params});
  }

  getCourseParticipants(proficiency: string, courseId: number) {

    const params = new HttpParams();
    params.set("proficiency", proficiency);
    params.set("courseId", courseId.toLocaleString())
    return this.http.get(environment.api + '/app/getCourseParticipants', {params})
  }

  getGroup(courseId: number) {
    const params = new HttpParams();
    params.set("courseId", courseId.toLocaleString());
    return this.http.get(environment.api + '/app/getGroup', {params});
  }

  getCourse(courseId) {

    return this.http.get(environment.api + '/get/getCourse/' + courseId.toLocaleString());
  }

  getCurrentCourse() {
    return this.http.get(environment.api + '/app/getCurrentCourse');
  }



}
