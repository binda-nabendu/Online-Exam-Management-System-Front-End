import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentDashboardComponent} from "./student-dashboard/student-dashboard.component";
import {StudentSpecialGuard} from "../../guard/student-special.guard";
import {BoardComponent} from "./board/board.component";
import {MyCoursesComponent} from "../teacher/my-courses/my-courses.component";

const routes: Routes = [
  {
    path: "student-dashboard", component: StudentDashboardComponent,
    children:[
      {path: "board", component: BoardComponent},
      {path: "my-courses", component: MyCoursesComponent},
    ], canActivate: [ StudentSpecialGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
