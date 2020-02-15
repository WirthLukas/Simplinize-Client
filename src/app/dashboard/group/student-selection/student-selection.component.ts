import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../_services/data.service';
import {ModalController} from '@ionic/angular';
import {CourseParticipation, CustomResponse} from '../../../_models/entities';
import {ToastService} from '../../../_services/toast.service';
import {HttpService} from '../../../_services/http.service';

@Component({
  selector: 'app-student-selection',
  templateUrl: './student-selection.component.html',
  styleUrls: ['./student-selection.component.scss'],
})
export class StudentSelectionComponent implements OnInit {

  courseParticipants: CourseParticipation [] = [];

  constructor(private dataService: DataService,
              public modalController: ModalController,
              public toastService: ToastService,
              public httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getCourseParticipants(this.dataService.group.proficiency, this.dataService.course.id).subscribe(res => this.checkResponse(res));
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  checkResponse(data: any) {

    const response: CustomResponse = new CustomResponse();

    Object.assign(response, data);

    switch (response.typ) {
      case 'hint':
        console.log(response.message);
        //this.toastService.presentHintToast(response.message);
        break;
      case 'data':
        console.log(response.data);
        this.courseParticipants = JSON.parse(JSON.stringify(response.data));
        break;
    }
  }
}
