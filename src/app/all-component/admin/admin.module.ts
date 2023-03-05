import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { BoardComponent } from './board/board.component';
import {MatCardModule} from "@angular/material/card";
import { PresentTeacherComponent } from './present-teacher/present-teacher.component';
import {MatTableModule} from "@angular/material/table";
import { PendingStudentComponent } from './pending-student/pending-student.component';
import { PopupComponent } from './popup/popup.component';
import { PendingTeacherComponent } from './pending-teacher/pending-teacher.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MaterialModule} from "../../../Material-Module";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    AdminDashboardComponent,
    BoardComponent,
    PresentTeacherComponent,
    PendingStudentComponent,
    PopupComponent,
    PendingTeacherComponent,
    AddDepartmentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class AdminModule { }
