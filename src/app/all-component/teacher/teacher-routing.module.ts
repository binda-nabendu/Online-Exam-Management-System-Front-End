import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeacherDashboardComponent} from "./teacher-dashboard/teacher-dashboard.component";
import {TeacherSpecialGuard} from "../../guard/teacher-special.guard";
import {BoardComponent} from "./board/board.component";
import {AllTeacherComponent} from "./all-teacher/all-teacher.component";
import {MyStudentComponent} from "./my-student/my-student.component";
import {AllStudentComponent} from "./all-student/all-student.component";
import {AllCoursesComponent} from "./all-courses/all-courses.component";

const routes: Routes = [
  {
    path: "teacher-dashboard", component: TeacherDashboardComponent,
    children:[
      {path: "board", component: BoardComponent},
      {path: "all-teacher", component: AllTeacherComponent},
      {path: "my-students", component: MyStudentComponent},
      {path: "all-students", component: AllStudentComponent},
      {path: "all-courses", component: AllCoursesComponent},
    ], canActivate: [TeacherSpecialGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
