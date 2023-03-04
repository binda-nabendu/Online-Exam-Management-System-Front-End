import { Component } from '@angular/core';
import {FormControl, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  addDepartment = new UntypedFormGroup({
    deptId: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
  });

  createNewDepartment() {

  }
}
