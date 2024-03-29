import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './all-component/public/about-us/about-us.component';
import { FaqComponent } from './all-component/public/faq/faq.component';
import { HomeComponent } from './all-component/public/home/home.component';
import { LoginComponent } from './all-component/public/login/login.component';
import{PublicDashboardComponent} from './all-component/public/public-dashboard/public-dashboard.component';
import { RegistrationComponent } from './all-component/public/registration/registration.component';
import { RegistrationTeacherComponent } from './all-component/public/registration-teacher/registration-teacher.component';
import {TncComponent} from "./all-component/public/tnc/tnc.component";
const routes: Routes = [
  {path: "public-dashboard", component: PublicDashboardComponent,
    children: [
      {path:"aboutUs", component: AboutUsComponent},
      {path:"faq", component: FaqComponent},
      {path:"home", component: HomeComponent},
      {path:"login", component: LoginComponent},
      {path:"register-student", component: RegistrationComponent},
      {path:"register-teacher", component: RegistrationTeacherComponent},
      {path:"t&c", component: TncComponent},

    ]
  },
  {path:"admin", loadChildren: ()=>import ('./all-component/admin/admin.module'). then(opt=>opt.AdminModule)},
  {path:"teacher", loadChildren: ()=>import ('./all-component/teacher/teacher.module'). then(opt=>opt.TeacherModule)},
  {path:"student", loadChildren: ()=>import ('./all-component/student/student.module'). then(opt=>opt.StudentModule)},


  {path:"**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollOffset: [0, 50],
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
