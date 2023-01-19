import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {AdminSpecialGuard} from "../../guard/admin-special.guard";
import {BoardComponent} from "./board/board.component";
import { PresentTeacherComponent } from './present-teacher/present-teacher.component';

const routes: Routes = [
  {
    path: "admin-dashboard", component: AdminDashboardComponent,
    children: [
      {path: "board", component: BoardComponent},
      {path: "present-teacher", component: PresentTeacherComponent}
    ], canActivate: [AdminSpecialGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
