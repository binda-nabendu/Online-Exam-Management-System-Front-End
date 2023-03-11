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


@NgModule({
  declarations: [
    StudentDashboardComponent,
    BoardComponent,
    CourseComponent,
    ExamsComponent,
    RequestForCourseComponent,
  ],
    imports: [
        CommonModule,
        StudentRoutingModule,
        MatCardModule,
        MatTableModule
    ]
})
export class StudentModule { }
