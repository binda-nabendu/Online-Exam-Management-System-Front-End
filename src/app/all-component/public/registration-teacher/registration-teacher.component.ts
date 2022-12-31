import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-teacher',
  templateUrl: './registration-teacher.component.html',
  styleUrls: ['./registration-teacher.component.css']
})
export class RegistrationTeacherComponent implements OnInit{
  constructor(private router: Router) {
  }
  ngOnInit(): void {

  }
  goToRegStdPage(){
    this.router.navigate(['public-dashboard/register-student']);
  }
  regTecForm = new FormGroup({
    nid: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    fatherName: new FormControl('', Validators.required),
    motherName: new FormControl('', Validators.required),
    gender: new FormControl('2',Validators.required),
    contactNo: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    dob:new FormControl({ provide: MAT_DATE_LOCALE, useValue: 'en-GB' },Validators.required),
    address:new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    eduQualification:new FormControl('',Validators.required),
    expertise:new FormControl('',Validators.required)
  });
  registerTeacher(){

  }
  signup(){
    this.router.navigate(['public-dashboard/login']);
  }
  backLogin(){
    this.router.navigate(['public-dashboard/login']);
  }
}
