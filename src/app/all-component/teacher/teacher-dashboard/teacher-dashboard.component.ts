import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit{

  @HostBinding('class.navbar-opened') navbarOpened = false;
  @HostBinding('class.navbar-opened') sidebarOpened = false;
  constructor(private router: Router, private service: UserService) {
  }
  ngOnInit(): void {
    this.username = "Acharjha Chanakkaya"
  }
  username:any;
  li1=false; li2=false; li3=false; li4=false; li5= false;

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }
  // navbarOpened: any;
  logOut() {
    this.service.LoggedOut();
    this.router.navigate(["public-dashboard/login"]);
  }

}
