import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentDashboardComponent} from "./student-dashboard/student-dashboard.component";
import {StudentSpecialGuard} from "../../guard/student-special.guard";

const routes: Routes = [
  {
    path: "student-dashboard", component: StudentDashboardComponent,
    children:[

    ], canActivate: [ StudentSpecialGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
