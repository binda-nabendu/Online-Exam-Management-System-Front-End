import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormControl, UntypedFormGroup, Validators} from "@angular/forms";
import * as moment from "moment";
import {regStd} from "../../../model/regStd";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {regTec} from "../../../model/regTec";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import alertify from "alertifyjs";
import {AdminService} from "../../../service/admin.service";
class approveStd {
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: AdminService) {

  }
  userDetailsPending = new UntypedFormGroup({
    nid: new FormControl({value: '', disabled: true}),
    userName: new FormControl({value:'', disabled: true}),
    fatherName: new FormControl({value:'', disabled: true}),
    motherName: new FormControl({value:'', disabled: true}),
    gender: new FormControl({value:'', disabled: true}),
    contactNo: new FormControl({value:'', disabled: true}),
    email: new FormControl({value:'', disabled: true}),
    dob:new FormControl({value:'', disabled: true}),
    address:new FormControl({value:'', disabled: true}),
    property1:new FormControl({value:'', disabled: true}),
    property2:new FormControl({value:'', disabled: true})
  });
  stp1: any;
  stp2: any;


  approveStudent() {
    let data: any = this.userDetailsPending.getRawValue().dob;

    // console.log(this.approveStd.value);
    // let student: approveStd = {
    //   nid: this.approveStd.value.nid,
    //   userName: this.approveStd.value.userName,
    //   fatherName: this.approveStd.value.fatherName,
    //   motherName: this.approveStd.value.motherName,
    //   gender: this.approveStd.value.gender,
    //   contactNo: this.approveStd.value.contactNo,
    //   email: this.approveStd.value.email,
    //   dob: this.approveStd.value.dob,
    //   address: this.approveStd.value.address,
    //   deptId: this.approveStd.value.deptId,
    //   semester: this.approveStd.value.semester
    // };

  }

  ngOnInit(): void {
    console.log(this.data.userDetails.nid);
    this.updatePopup();

  }

  updatePopup(): void {
    this.userDetailsPending.setValue({
      nid: this.data.userDetails.nid,
      userName: this.data.userDetails.userName,
      fatherName: this.data.userDetails.fatherName,
      motherName: this.data.userDetails.motherName,
      gender: this.data.userDetails.gender == 1 ? "male" : "female",
      contactNo: this.data.userDetails.contactNo,
      email: this.data.userDetails.email,
      dob: this.data.userDetails.dob,
      address: this.data.userDetails.address,
      property1: this.data.userDetails.deptId != undefined ? this.data.userDetails.deptId : this.data.userDetails.eduQualification,
      property2: this.data.userDetails.semester != undefined ? this.data.userDetails.semester : this.data.userDetails.expertise,

    });
    if(this.data.userDetails.deptId != undefined){
      this.stp1 = "Department ID";
      this.stp2 = "Semester"
    }else{
      this.stp1 = "Educational Qualification";
      this.stp2 = "Expertise"
    }
  }

  FunctionDelete() {
    alertify.confirm("Remove User","do you want remove this user?",()=>{
      if(this.data.userDetails.semester != undefined) {
        this.service.removeStudent(this.data.userDetails.nid).subscribe(item => {
          this.service.getPendingStudents();
          alertify.success("Removed Student Successfully");
        });
      }else{
        this.service.removeTeacher(this.data.userDetails.nid).subscribe(item => {
          this.service.getPendingStudents();
          alertify.success("Removed Teacher Successfully");
        });
      }

    },function(){})

  }
}
