import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../_services/data.service';
import {ModalController} from '@ionic/angular';
import {CustomResponse} from '../../../_models/entities';
import {ToastService} from '../../../_services/toast.service';
import {HttpService} from '../../../_services/http.service';

@Component({
  selector: 'app-student-selection',
  templateUrl: './student-selection.component.html',
  styleUrls: ['./student-selection.component.scss'],
})
export class StudentSelectionComponent implements OnInit {

  constructor(private dataService: DataService,
              public modalController: ModalController,
              public toastService: ToastService,
              public httpService: HttpService) { }

  ngOnInit() {
    //this.httpService.getCourseParticipations(this.dataService.group.proficiency).subscribe(res => this.checkResponse(res));
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  checkResponse(data: any) {

    const response: CustomResponse = new CustomResponse();

    Object.assign(response, data);

    switch (response.typ) {
      case 'hint':
        this.toastService.presentHintToast(response.message);
        break;
      case 'data':
        console.log(response.data);
        this.dataService.courseParticipants = JSON.parse(JSON.stringify(response.data));
        break;
    }
  }
}
