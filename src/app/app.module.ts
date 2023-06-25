import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarsComponent } from './cars/cars.component';
import { CarSearchComponent } from './car-search/car-search.component';
import { MessagesComponent } from './messages/messages.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CarsComponent,
    CarDetailComponent,
    MessagesComponent,
    CarSearchComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
