import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './all-component/public/about-us/about-us.component';
import { FaqComponent } from './all-component/public/faq/faq.component';
import { HomeComponent } from './all-component/public/home/home.component';
import { LoginComponent } from './all-component/public/login/login.component';
import{PublicDashboardComponent} from './all-component/public/public-dashboard/public-dashboard.component';
import { RegistrationComponent } from './all-component/public/registration/registration.component';
import {TncComponent} from "./all-component/public/tnc/tnc.component";

const routes: Routes = [
  {path: "public-dashboard", component: PublicDashboardComponent,
    children: [
      {path:"aboutUs", component: AboutUsComponent},
      {path:"faq", component: FaqComponent},
      {path:"home", component: HomeComponent},
      {path:"login", component: LoginComponent},
      {path:"register", component: RegistrationComponent},
      {path:"t&c", component: TncComponent},

    ]
  },
  {path:"**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
