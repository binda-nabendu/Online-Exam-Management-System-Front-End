import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeacherDashboardComponent} from "./teacher-dashboard/teacher-dashboard.component";

const routes: Routes = [
  {
    path: "teacher-dashboard", component: TeacherDashboardComponent,
    children:[

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
