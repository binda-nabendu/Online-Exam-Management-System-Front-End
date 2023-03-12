import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { BoardComponent } from './board/board.component';
import {MatCardModule} from "@angular/material/card";
import { CourseComponent } from './course/course.component';
import {MatTableModule} from "@angular/material/table";
import { ExamsComponent } from './exams/exams.component';
import { RequestForCourseComponent } from './request-for-course/request-for-course.component';
import {MatButtonModule} from "@angular/material/button";
import { QuestionPaperWithAnsScriptComponent } from './question-paper-with-ans-script/question-paper-with-ans-script.component';
import {MatRadioModule} from "@angular/material/radio";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    StudentDashboardComponent,
    BoardComponent,
    CourseComponent,
    ExamsComponent,
    RequestForCourseComponent,
    QuestionPaperWithAnsScriptComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule
  ]
})
export class StudentModule { }
