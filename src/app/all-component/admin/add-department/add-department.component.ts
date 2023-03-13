import {Component} from '@angular/core';
import {FormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../service/admin.service";
import {Department} from "../../../model/Department";
import * as alertify from "alertifyjs"
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  constructor(private router: Router, private service: AdminService) {
  }

  addDepartment = new UntypedFormGroup({
    deptId: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
  });

  createNewDepartment() {
    let dept: Department = {
      deptId: this.addDepartment.value.deptId,
      deptName: this.addDepartment.value.name
    };
    this.service.createDept(dept);
    this.addDepartment.setValue({deptId: "", name: ""});
    alertify.success("Department Add Successful");
  }
}
