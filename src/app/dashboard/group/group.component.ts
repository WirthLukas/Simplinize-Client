import { Component, OnInit } from '@angular/core';
import {DataService} from '../../_services/data.service';
import {ModalController, ActionSheetController} from '@ionic/angular';
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
              public actionSheetController: ActionSheetController,
              public router: Router)
  {}

  ngOnInit() {}

  test() {
    this.router.navigate(['/dashboard/group/studentDetail']);
  }

  showModal() {
      this.presentModal();
  }

  pop() {
    this.presentActionSheet();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: StudentSelectionComponent
    });
    return await modal.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Max Musterman',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      },
        {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
