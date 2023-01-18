import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  @HostBinding('class.navbar-opened') navbarOpened = false;
  @HostBinding('class.navbar-opened') sidebarOpened = false;
  constructor(private router: Router, private service: UserService) {
  }
  ngOnInit(): void {
    this.username = "Acharya Aryabhata";
    this.router.navigate(['admin/admin-dashboard/board']);
  }
  username:any;
  li1=false; li2=false; li3=false; li4=false; li5= false;
  enableSubMenu(){
    this.li1=false; this.li2=false; this.li3=false; this.li4=false; this.li5= false;

  }

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }
  // navbarOpened: any;
  logOut() {
    this.service.LoggedOut();
    this.router.navigate(["public-dashboard/login"]);
  }
}
