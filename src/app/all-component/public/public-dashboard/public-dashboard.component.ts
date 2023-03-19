import {Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import alertify from "alertifyjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-public-dashboard',
  templateUrl: './public-dashboard.component.html',
  styleUrls: ['./public-dashboard.component.css']
})
export class PublicDashboardComponent implements OnInit{
  isLogin = false;

  constructor(private service: UserService, private router: Router) {
  }
  ngOnInit(): void {
    if(this.service.getRole() != 'public') this.isLogin = true;
    if (this.service.getRole() == 'STUDENT')
      this.router.navigate(["student/student-dashboard"]);
    else if (this.service.getRole() == 'TEACHER')
      this.router.navigate(["teacher/teacher-dashboard"]);
    else if (this.service.getRole() == 'ADMIN')
      this.router.navigate(["admin/admin-dashboard"]);
  }
  goToDashBoard() {
    if (this.service.getRole() == 'STUDENT')
      this.router.navigate(["student/student-dashboard"]);
    else if (this.service.getRole() == 'TEACHER')
      this.router.navigate(["teacher/teacher-dashboard"]);
    else if (this.service.getRole() == 'ADMIN')
      this.router.navigate(["admin/admin-dashboard"]);
  }
}
