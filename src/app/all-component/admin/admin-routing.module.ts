import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {AdminSpecialGuard} from "../../guard/admin-special.guard";
import {BoardComponent} from "./board/board.component";
import { PresentTeacherComponent } from './present-teacher/present-teacher.component';
import {MyStudentComponent} from "../teacher/my-student/my-student.component";
import {AllStudentComponent} from "../teacher/all-student/all-student.component";
import {PendingStudentComponent} from "./pending-student/pending-student.component";
import {PendingTeacherComponent} from "./pending-teacher/pending-teacher.component";
import {AddDepartmentComponent} from "./add-department/add-department.component";
import {ChangeSemesterComponent} from "./change-semester/change-semester.component";
import {AddCourseComponent} from "./add-course/add-course.component";
import {AllCoursesComponent} from "../teacher/all-courses/all-courses.component";

const routes: Routes = [
  {
    path: "admin-dashboard", component: AdminDashboardComponent,
    children: [
      {path: "board", component: BoardComponent},
      {path: "present-teacher", component: PresentTeacherComponent},
      {path: "my-students", component: MyStudentComponent},
      {path: "all-students", component: AllStudentComponent},
      {path: "pending-students", component: PendingStudentComponent},
      {path: "pending-teachers", component: PendingTeacherComponent},
      {path: "add-department", component: AddDepartmentComponent},
      {path: "shift-semester", component: ChangeSemesterComponent},
      {path: "add-course", component:AddCourseComponent},
      {path: "all-courses", component: AllCoursesComponent},
    ], canActivate: [AdminSpecialGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
