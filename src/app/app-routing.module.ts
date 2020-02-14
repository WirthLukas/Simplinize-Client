import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GroupComponent} from './dashboard/group/group.component';
import {RatingComponent} from './dashboard/rating/rating.component';
import {RaceComponent} from './dashboard/race/race.component';
import {AdminComponent} from './dashboard/admin/admin.component';
import {ErrorComponent} from './error/error.component';
import {OverviewComponent} from './dashboard/admin/overview/overview.component';
import {DashboardHomeComponent} from './dashboard/dashboard-home/dashboard-home.component';
import {StudentSelectionComponent} from './dashboard/group/student-selection/student-selection.component';
import {StudentDetailComponent} from './dashboard/group/student-detail/student-detail.component';
import {AuthGuard} from './_guards/auth.guard';
import {Enums} from './_models/enums';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'dashboard', component: DashboardComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: DashboardHomeComponent},
      { path: 'group', children: [
              {path: '', component: GroupComponent},
              {path: 'studentDetail', component: StudentDetailComponent},
              {path: 'studentSelection', component: StudentSelectionComponent}
          ]},
      { path: 'rating', component: RatingComponent},
      { path: 'race', component: RaceComponent},
      { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: {
          roles: [Enums.ADMIN, Enums.INSTRUCTOR, Enums.RACE]
          }, children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full'},
              { path: 'overview', component: OverviewComponent},
              // { path: 'settings', component: AdminSettingsComponent},
          ]}
      ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
