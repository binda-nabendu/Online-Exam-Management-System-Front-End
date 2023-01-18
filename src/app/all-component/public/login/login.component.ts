import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../../../../Material-Module";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import * as alertify from "alertifyjs";
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
  respond:any;
  checkValidate(userDetails:any){
    if(userDetails.valid){
      localStorage.clear();
      this.service.proceedLogin(userDetails.value).subscribe(item => {
        this.respond = item;

          if(this.respond != null){

            localStorage.setItem('OEMSToken',this.respond.jwt);
            // console.log(this.service.GetRole());
            if (this.service.GetRole() == 'STUDENT')
              this.router.navigate(["student/student-dashboard"]);
            else if (this.service.GetRole() == 'TEACHER')
              this.router.navigate(["teacher/teacher-dashboard"]);
            else if (this.service.GetRole() == 'ADMIN')
              this.router.navigate(["admin/admin-dashboard"]);
            }else{
              alertify.error("Fail to login")
            }
      });
    }
    else
      alertify.error("Fail to login")

  }
  goToRegPage(){
    this.router.navigate(['public-dashboard/register-student']);
  }
}
