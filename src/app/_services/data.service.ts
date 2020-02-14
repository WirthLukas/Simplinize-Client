import { Injectable } from '@angular/core';
import {CurrentUser, CustomResponse, Group, GroupParticipation, Student, Course, CourseParticipation} from '../_models/entities';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  groupParticipations: GroupParticipation [] = [];
  group: Group = new Group();
  courseParticipants: CourseParticipation [] = [];
  course: Course = new Course();
}
