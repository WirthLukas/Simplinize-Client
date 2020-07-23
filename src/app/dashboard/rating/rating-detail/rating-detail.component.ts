import { Component, OnInit, Input } from '@angular/core';
import {StudentSelectionComponent} from '../../group/student-selection/student-selection.component';
import {DataService} from '../../../_services/data.service';
import {ToastService} from '../../../_services/toast.service';
import {ActionSheetController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {HttpService} from '../../../_services/http.service';

@Component({
  selector: 'app-rating-detail',
  templateUrl: './rating-detail.component.html',
  styleUrls: ['./rating-detail.component.scss'],
})
export class RatingDetailComponent implements OnInit {

  @Input('student') student;

  constructor(private dataService: DataService,
              private toastService: ToastService,
              private modalController: ModalController,
              private actionSheetController: ActionSheetController,
              private router: Router,
              private http: HttpService) { }

  ngOnInit() {
    console.log(this.student.firstName);
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
