import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeacherDashboardComponent} from "./teacher-dashboard/teacher-dashboard.component";
import {TeacherSpecialGuard} from "../../guard/teacher-special.guard";
import {BoardComponent} from "./board/board.component";
import {AllTeacherComponent} from "./all-teacher/all-teacher.component";
import {MyStudentComponent} from "./my-student/my-student.component";
import {AllStudentComponent} from "./all-student/all-student.component";
import {AllCoursesComponent} from "./all-courses/all-courses.component";
import {MyCoursesComponent} from "./my-courses/my-courses.component";
import {QuestionPaperComponent} from "./question-paper/question-paper.component";
import {MyQuestionComponent} from "./my-question/my-question.component";
import {ExamineAnsScriptComponent} from "./examine-ans-script/examine-ans-script.component";
import {AssignGradeComponent} from "./assign-grade/assign-grade.component";
import {AssignCgpaComponent} from "./assign-cgpa/assign-cgpa.component";
import {ReviewComponent} from "./review/review.component";

const routes: Routes = [
  {
    path: "teacher-dashboard", component: TeacherDashboardComponent,
    children:[
      {path: "board", component: BoardComponent},
      {path: "all-teacher", component: AllTeacherComponent},
      {path: "my-students", component: MyStudentComponent},
      {path: "all-students", component: AllStudentComponent},
      {path: "all-courses", component: AllCoursesComponent},
      {path: "my-courses", component: MyCoursesComponent},
      {path: "set-question", component: QuestionPaperComponent},
      {path: "my-questions", component: MyQuestionComponent},
      {path: "waiting-for-examining-question-list", component: ExamineAnsScriptComponent},
      {path: "student-list-of-that-exam/:examId", component: ExamineAnsScriptComponent},
      {path: "assign-grade-course", component: AssignGradeComponent},
      {path: "assign-cgpa/:courseCode", component: AssignCgpaComponent},
      {path: "review", component: ReviewComponent},
    ], canActivate: [TeacherSpecialGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
