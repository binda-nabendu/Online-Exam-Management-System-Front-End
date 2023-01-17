import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  @HostBinding('class.navbar-opened') navbarOpened = false;
  @HostBinding('class.navbar-opened') sidebarOpened = false;
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.username = "Acharya Aryabhata"
  }
  username:any;
  li1=false; li2=false; li3=false; li4=false; li5= false;

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }
  // navbarOpened: any;
  logOut() {
    this.router.navigate(["public-dashboard/login"]);
  }
}
