import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../_services/http.service';
import {DataService} from '../../_services/data.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
})
export class DashboardHomeComponent implements OnInit {

  constructor(private httpService: HttpService, private dataService: DataService) { }

  ngOnInit() {}
}
