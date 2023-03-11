import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentDashboardComponent} from "./student-dashboard/student-dashboard.component";
import {StudentSpecialGuard} from "../../guard/student-special.guard";
import {BoardComponent} from "./board/board.component";
import {CourseComponent} from "./course/course.component";
import {ExamsComponent} from "./exams/exams.component";

const routes: Routes = [
  {
    path: "student-dashboard", component: StudentDashboardComponent,
    children:[
      {path: "board", component: BoardComponent},
      {path: "my-courses", component: CourseComponent},
      {path: "departmental-course", component: CourseComponent},
      {path: "course-completed", component: CourseComponent},
      {path: "exams/upcoming", component: ExamsComponent},
      {path: "exams/previous", component: ExamsComponent},
      {path: "request-for-course", component: ExamsComponent},
    ], canActivate: [ StudentSpecialGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
