import { Component } from '@angular/core';
import {FormControl, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-change-semester',
  templateUrl: './change-semester.component.html',
  styleUrls: ['./change-semester.component.css']
})
export class ChangeSemesterComponent {
    addSemester = new UntypedFormGroup({
    deptId: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
  });
  createNewSemester() {

  }
}
