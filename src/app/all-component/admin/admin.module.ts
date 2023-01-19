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


@NgModule({
  declarations: [
    AdminDashboardComponent,
    BoardComponent,
    PresentTeacherComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTableModule
    ]
})
export class AdminModule { }
