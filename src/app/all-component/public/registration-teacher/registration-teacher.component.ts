import {Component, LOCALE_ID, OnInit} from '@angular/core';
import {FormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import * as moment from 'moment';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MomentDateAdapter} from "@angular/material-moment-adapter";
import {regTec} from "../../../model/regTec";

export const DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-registration-teacher',
  templateUrl: './registration-teacher.component.html',
  styleUrls: ['./registration-teacher.component.css'],
  providers: [
    { provide: DateAdapter, useClass:MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
    { provide: LOCALE_ID, useValue: 'en-GB' },
  ],
})
export class RegistrationTeacherComponent implements OnInit{
  constructor(private router: Router, private service: UserService) {
  }
  ngOnInit(): void {

  }
  goToRegStdPage(){
    this.router.navigate(['public-dashboard/register-student']);
  }
  regTecForm = new UntypedFormGroup({
    nid: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    fatherName: new FormControl('', Validators.required),
    motherName: new FormControl('', Validators.required),
    gender: new FormControl('',Validators.required),
    contactNo: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    dob:new FormControl(Validators.required),
    address:new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    eduQualification:new FormControl('',Validators.required),
    expertise:new FormControl('',Validators.required)
  });
  registerTeacher(){
    let data:any = this.regTecForm.getRawValue().dob;
    this.regTecForm.value.dob = moment(data).format('YYYY-MM-DD');
    console.log(this.regTecForm.value);
    let teacher: regTec = {nid:this.regTecForm.value.nid,
      userName:this.regTecForm.value.userName,
      fatherName:this.regTecForm.value.fatherName,
      motherName:this.regTecForm.value.motherName,
      gender:this.regTecForm.value.gender,
      contactNo:this.regTecForm.value.contactNo,
      email:this.regTecForm.value.email,
      dob:this.regTecForm.value.dob,
      address:this.regTecForm.value.address,
      password:this.regTecForm.value.password,
      eduQualification:this.regTecForm.value.eduQualification,
      expertise:this.regTecForm.value.expertise
    };
    if(this.regTecForm.valid){
      this.service.submitTecReg(teacher).subscribe(item =>{
        console.log(item);
        this.router.navigate(['public-dashboard/login']);
      });
    }

  }
  signup(){
    this.router.navigate(['public-dashboard/login']);
  }
  backLogin(){
    this.router.navigate(['public-dashboard/login']);
  }
}
