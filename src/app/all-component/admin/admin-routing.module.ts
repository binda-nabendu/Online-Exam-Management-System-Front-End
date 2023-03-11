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
import {AssignTeacherToSubjectComponent} from "./assign-teacher-to-subject/assign-teacher-to-subject.component";
import {MyCoursesComponent} from "../teacher/my-courses/my-courses.component";
import {QuestionPaperComponent} from "../teacher/question-paper/question-paper.component";
import {MyQuestionComponent} from "../teacher/my-question/my-question.component";
import {RequestedCourseByStudentComponent} from "./requested-course-by-student/requested-course-by-student.component";

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
      {path: "assign-course", component: AssignTeacherToSubjectComponent},
      {path: "my-courses", component: MyCoursesComponent},
      {path: "set-question", component: QuestionPaperComponent},
      {path: "my-questions", component: MyQuestionComponent},
      {path: "requested-course", component: RequestedCourseByStudentComponent},
    ], canActivate: [AdminSpecialGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
