import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {regStd} from "../../../model/regStd";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  constructor(private router: Router, private service: UserService) {
  }
  regStdForm:any;
  ngOnInit(): void {
  }

  registerStudent(){

  }
  checkValidateReg(userDetails:regStd){

  }
  goToRegTecPage(){
    this.router.navigate(['public-dashboard/register-teacher']);
  }
  backlogin(){
    this.router.navigate(['public-dashboard/login']);
  }
}
