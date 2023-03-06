import { Component } from '@angular/core';
import {FormControl, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  addCourse = new UntypedFormGroup({
    deptId: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
  });

  createNewCourse() {

  }
}
