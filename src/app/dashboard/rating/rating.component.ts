import { Component, OnInit } from '@angular/core';
import {DataService} from '../../_services/data.service';
import {ToastService} from '../../_services/toast.service';
import {ActionSheetController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {HttpService} from '../../_services/http.service';
import {StudentSelectionComponent} from '../group/student-selection/student-selection.component';
import {RatingDetailComponent} from './rating-detail/rating-detail.component';
import {Student} from '../../_models/entities';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {

  constructor(private dataService: DataService,
              private toastService: ToastService,
              private modalController: ModalController,
              private actionSheetController: ActionSheetController,
              private router: Router,
              private http: HttpService) { }

  ngOnInit() {}


  showModal(student: Student) {
    this.presentModal(student);
  }

  private async presentModal(student: Student) {
    const modal = await this.modalController.create({
      component: RatingDetailComponent,
      componentProps: {
        student: {
          id : student.id,
          firstName: student.firstName,
          lastName: student.lastName
        }
      }
    });
    return await modal.present();
  }

}
