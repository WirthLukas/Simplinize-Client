import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './dashboard/home/home.component';
import {GroupComponent} from './dashboard/group/group.component';
import {RatingComponent} from './dashboard/rating/rating.component';
import {RaceComponent} from './dashboard/race/race.component';
import {AdminComponent} from './dashboard/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'group', component: GroupComponent},
      {path: 'rating', component: RatingComponent},
      {path: 'race', component: RaceComponent},
      {path: 'admin', component: AdminComponent}
    ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
