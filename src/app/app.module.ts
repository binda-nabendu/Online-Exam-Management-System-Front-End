import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicDashboardComponent } from './all-component/public/public-dashboard/public-dashboard.component';
import { HomeComponent } from './all-component/public/home/home.component';
import { TncComponent } from './all-component/public/tnc/tnc.component';
import { AboutUsComponent } from './all-component/public/about-us/about-us.component';
import { FaqComponent } from './all-component/public/faq/faq.component';
import {LoginComponent} from "./all-component/public/login/login.component";
import { RegistrationComponent } from './all-component/public/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "../Material-Module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PublicDashboardComponent,
    HomeComponent,
    TncComponent,
    AboutUsComponent,
    FaqComponent,
    RegistrationComponent,
  ],
  imports: [
    LoginComponent,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
