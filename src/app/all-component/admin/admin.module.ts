import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { BoardComponent } from './board/board.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    AdminDashboardComponent,
    BoardComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule
    ]
})
export class AdminModule { }
