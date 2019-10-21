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
import {HomeComponent} from './dashboard/home/home.component';
import {RaceComponent} from './dashboard/race/race.component';
import {RatingComponent} from './dashboard/rating/rating.component';

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      DashboardComponent,
      AdminComponent,
      GroupComponent,
      HomeComponent,
      RaceComponent,
      RatingComponent
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
