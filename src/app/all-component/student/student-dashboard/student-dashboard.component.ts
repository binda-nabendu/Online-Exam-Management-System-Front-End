import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit{

  @HostBinding('class.navbar-opened') navbarOpened = false;
  @HostBinding('class.navbar-opened') sidebarOpened = false;
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.username = "John Doe"
  }
  username:any;
  li1=false; li2=false; li3= false;

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }
  // navbarOpened: any;

  logOut() {
    this.router.navigate(["public-dashboard/login"]);
  }
}
