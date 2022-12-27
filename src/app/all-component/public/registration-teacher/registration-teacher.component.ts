import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-teacher',
  templateUrl: './registration-teacher.component.html',
  styleUrls: ['./registration-teacher.component.css']
})
export class RegistrationTeacherComponent {
  constructor(private router: Router) {
  }
  goToRegStdPage(){
    this.router.navigate(['public-dashboard/register-student']);
  }
  registerTeacher(teacher:any){

  }
  signup(){
    this.router.navigate(['public-dashboard/login']);
  }
}
