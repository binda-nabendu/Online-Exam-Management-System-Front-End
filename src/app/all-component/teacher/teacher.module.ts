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
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TeacherDashboardComponent,
    BoardComponent,
    AllTeacherComponent,
    MyStudentComponent
  ],
    imports: [
        CommonModule,
        TeacherRoutingModule,
        MatCardModule,
        MatTableModule,
        MaterialModule,
        ReactiveFormsModule
    ]
})
export class TeacherModule { }
