import { Component, OnInit } from '@angular/core';
import {DataService} from '../../_services/data.service';
import {ModalController} from '@ionic/angular';
import {StudentSelectionComponent} from './student-selection/student-selection.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {

  constructor(private dataService: DataService,
              public modalController: ModalController,
              public router: Router)
  {}

  ngOnInit() {}

  test() {
    this.router.navigate(['/studentDetail']);
  }

  showModal() {
      this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: StudentSelectionComponent
    });
    return await modal.present();
  }

}
