import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { BoardComponent } from './board/board.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    TeacherDashboardComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MatCardModule
  ]
})
export class TeacherModule { }
