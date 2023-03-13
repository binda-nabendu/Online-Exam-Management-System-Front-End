import { Component } from '@angular/core';
import {FormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../service/admin.service";
import alertify from "alertifyjs";

@Component({
  selector: 'app-change-semester',
  templateUrl: './change-semester.component.html',
  styleUrls: ['./change-semester.component.css']
})
export class ChangeSemesterComponent {
  constructor(private service: AdminService) {
  }
    addSemester = new UntypedFormGroup({
    nid: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required),
  });
  createNewSemester() {
    let formData: FormData = new FormData();
    formData.append('nid', this.addSemester.value.nid);
    formData.append('password', this.addSemester.value.pass);
    this.service.changeSem(formData).subscribe(data =>{
      if (data != null) {
        alertify.success("Welcome to New Semester");
      } else {
        alertify.error("You are not authorized");
      }
    })
  }
}
