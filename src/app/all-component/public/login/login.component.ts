import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../../../../Material-Module";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [CommonModule,MaterialModule,FormsModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router : Router, private service: UserService) {
  }
  private t: string = "hei ";
  ngOnInit(): void {
  }
  checkValidate(userDetails:any){
    if(userDetails.valid){
      console.log(userDetails.value);
      // this.service.proceedLogin(userDetails.value).subscribe(item => {
      //     console.log(item);
      // });
      this.router.navigate(["admin/admin-dashboard"]);
    }

  }
  goToRegPage(){
    this.router.navigate(['public-dashboard/register-student']);
  }
}
