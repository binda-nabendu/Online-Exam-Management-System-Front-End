import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { BoardComponent } from './board/board.component';
import {MatCardModule} from "@angular/material/card";
import { AllTeacherComponent } from './all-teacher/all-teacher.component';
import {MatTableModule} from "@angular/material/table";
import {MaterialModule} from "../../../Material-Module";
import { MyStudentComponent } from './my-student/my-student.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AllStudentComponent } from './all-student/all-student.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { QuestionPaperComponent } from './question-paper/question-paper.component';
import { MyQuestionComponent } from './my-question/my-question.component';
import { SelectedQuestionComponent } from './selected-question/selected-question.component';
import { ExamineAnsScriptComponent } from './examine-ans-script/examine-ans-script.component';
import { ExaminSelectScriptComponent } from './examin-select-script/examin-select-script.component';
import { AssignGradeComponent } from './assign-grade/assign-grade.component';


@NgModule({
  declarations: [
    TeacherDashboardComponent,
    BoardComponent,
    AllTeacherComponent,
    MyStudentComponent,
    AllStudentComponent,
    AllCoursesComponent,
    MyCoursesComponent,
    QuestionPaperComponent,
    MyQuestionComponent,
    SelectedQuestionComponent,
    ExamineAnsScriptComponent,
    ExaminSelectScriptComponent,
    AssignGradeComponent,
  ],
    imports: [
        CommonModule,
        TeacherRoutingModule,
        MatCardModule,
        MatTableModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class TeacherModule { }
