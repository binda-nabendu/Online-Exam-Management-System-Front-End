import {Component, OnInit} from '@angular/core';
import {FormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Department} from "../../../model/Department";
import {UserService} from "../../../service/user.service";
import {Course} from "../../../model/Course";
import {AdminService} from "../../../service/admin.service";
import alertify from "alertifyjs";
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit{
  constructor(private userService: UserService, private adminService: AdminService) {
  }
  ngOnInit(): void {
    this.userService.getAvailableDept().subscribe(item=>{
      this.depts = item;
    })
  }
  addCourse = new UntypedFormGroup({
    courseCode: new FormControl('', Validators.required),
    courseName: new FormControl('', Validators.required),
  });
  depts: Department[] = [];
  selectedValue: string = '';

  createNewCourse() {
    let crs: Course = {
      deptId: this.selectedValue,
      courseCode: this.addCourse.value.courseCode,
      courseName: this.addCourse.value.courseName,
      teacherId: "Not assigned",
      courseSessions: '-33'
    }
    console.log(crs);
    this.adminService.createCourse(crs);
    this.addCourse.setValue({courseCode: "", courseName: ""});
    alertify.success("Course Add Successful");
  }

}
