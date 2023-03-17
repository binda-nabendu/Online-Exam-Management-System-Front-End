import {Component, LOCALE_ID, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {regStd} from "../../../model/regStd";
import {UserService} from "../../../service/user.service";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MomentDateAdapter} from "@angular/material-moment-adapter";
import {FormControl, UntypedFormGroup, Validators} from "@angular/forms";
import * as moment from "moment/moment";
import * as alertify from "alertifyjs";

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
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [
    { provide: DateAdapter, useClass:MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
    { provide: LOCALE_ID, useValue: 'en-GB' },
  ],
})
export class RegistrationComponent implements OnInit{
  constructor(private router: Router, private service: UserService) {

  }

  ngOnInit(): void {
  }
  goToRegTecPage(){
    this.router.navigate(['public-dashboard/register-teacher']);
  }
  regStdForm = new UntypedFormGroup({
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
    deptId:new FormControl('',Validators.required),
    semester:new FormControl('',Validators.required)
  });
  registerStudent() {
    let data: any = this.regStdForm.getRawValue().dob;
    this.regStdForm.value.dob = moment(data).format('YYYY-MM-DD');
    let student: regStd = {
      nid: this.regStdForm.value.nid,
      userName: this.regStdForm.value.userName,
      fatherName: this.regStdForm.value.fatherName,
      motherName: this.regStdForm.value.motherName,
      gender: this.regStdForm.value.gender,
      contactNo: this.regStdForm.value.contactNo,
      email: this.regStdForm.value.email,
      dob: this.regStdForm.value.dob,
      address: this.regStdForm.value.address,
      password: this.regStdForm.value.password,
      deptId: this.regStdForm.value.deptId,
      semester: this.regStdForm.value.semester
    };
    if(this.regStdForm.valid){
      this.service.submitStdReg(student).subscribe(item =>{
        // console.log(item);
        this.router.navigate(['public-dashboard/login']);
      });
      alertify.success("Registration Successfully")
    }
    else
      alertify.error("Failed try again")
  }

  backLogin(){
    this.router.navigate(['public-dashboard/login']);
  }
}
