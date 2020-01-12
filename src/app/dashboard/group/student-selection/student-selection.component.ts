import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../_services/data.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-student-selection',
  templateUrl: './student-selection.component.html',
  styleUrls: ['./student-selection.component.scss'],
})
export class StudentSelectionComponent implements OnInit {

  constructor(private dataService: DataService,  public modalController: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
