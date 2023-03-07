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


@NgModule({
  declarations: [
    TeacherDashboardComponent,
    BoardComponent,
    AllTeacherComponent,
    MyStudentComponent,
    AllStudentComponent,
    AllCoursesComponent,
    MyCoursesComponent,
    QuestionPaperComponent
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
