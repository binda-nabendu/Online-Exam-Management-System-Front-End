import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { BoardComponent } from './board/board.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    StudentDashboardComponent,
    BoardComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatCardModule
  ]
})
export class StudentModule { }
