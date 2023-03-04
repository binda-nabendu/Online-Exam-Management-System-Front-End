import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, UntypedFormGroup, Validators} from "@angular/forms";
import * as moment from "moment";
import {regStd} from "../../../model/regStd";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

class approveStd {
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

  }
  approveStd = new UntypedFormGroup({
    nid: new FormControl({value: '', disabled: true}),
    userName: new FormControl({value:'', disabled: true}),
    fatherName: new FormControl({value:'', disabled: true}),
    motherName: new FormControl({value:'', disabled: true}),
    gender: new FormControl({value:'', disabled: true}),
    contactNo: new FormControl({value:'', disabled: true}),
    email: new FormControl({value:'', disabled: true}),
    dob:new FormControl({value:'', disabled: true}),
    address:new FormControl({value:'', disabled: true}),
    deptId:new FormControl({value:'', disabled: true}),
    semester:new FormControl({value:'', disabled: true})
  });


  approveStudent() {
    let data: any = this.approveStd.getRawValue().dob;

    console.log(this.approveStd.value);
    let student: approveStd = {
      nid: this.approveStd.value.nid,
      userName: this.approveStd.value.userName,
      fatherName: this.approveStd.value.fatherName,
      motherName: this.approveStd.value.motherName,
      gender: this.approveStd.value.gender,
      contactNo: this.approveStd.value.contactNo,
      email: this.approveStd.value.email,
      dob: this.approveStd.value.dob,
      address: this.approveStd.value.address,
      deptId: this.approveStd.value.deptId,
      semester: this.approveStd.value.semester
    };

  }

  ngOnInit(): void {
    console.log(this.data.student.nid);
    // console.log(this.data.hasOwnProperty('nid'));
    this.updatePopup();
  }
  updatePopup(): void {
    this.approveStd.setValue({
      nid: this.data.student.nid,
      userName: this.data.student.userName,
      fatherName: this.data.student.fatherName,
      motherName: this.data.student.motherName,
      gender: this.data.student.gender,
      contactNo: this.data.student.contactNo,
      email: this.data.student.email,
      dob: this.data.student.dob,
      address: this.data.student.address,
      deptId: this.data.student.deptId,
      semester: this.data.student.semester,

    });
  }
}
