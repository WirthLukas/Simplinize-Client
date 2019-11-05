import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminComponent} from './dashboard/admin/admin.component';
import {GroupComponent} from './dashboard/group/group.component';
import {RaceComponent} from './dashboard/race/race.component';
import {RatingComponent} from './dashboard/rating/rating.component';
import {RegisterComponent} from './register/register.component';
import {ErrorComponent} from './error/error.component';
import {DashboardHomeComponent} from './dashboard/dashboard-home/dashboard-home.component';
import {FamilyComponent} from './family/family.component';
import {FamilyHomeComponent} from './family/family-home/family-home.component';
import {OverviewComponent} from './dashboard/admin/overview/overview.component';

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      ErrorComponent,
      DashboardComponent,
      AdminComponent,
      GroupComponent,
      RaceComponent,
      RatingComponent,
      DashboardHomeComponent,
      FamilyComponent,
      FamilyHomeComponent,
      OverviewComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
