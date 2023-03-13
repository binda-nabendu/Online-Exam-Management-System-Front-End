import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-my-student',
  templateUrl: './my-student.component.html',
  styleUrls: ['./my-student.component.css']
})


export class MyStudentComponent implements OnInit{
  constructor(private service: TeacherService) {
  }
  ngOnInit(): void {
    this.getMyCourses();
  }
  courses: any;
  displayedColumnName: string[] = ['User Name', 'Father Name', 'Mother Name','Contact No', 'Email', 'Address', 'Department', 'Semester'];
  displayedColumns: string[] = ['userName', 'fatherName', 'motherName', 'contactNo', 'email', 'address', 'deptId', 'semester'];
  dataSource:any;
  getAllStudents(courseCode: String){
    this.service.getSpecificCoursesStudent(courseCode).subscribe(student =>{
      this.dataSource = student;
      console.log(student)
    })
  }
  updateForm = new FormGroup({
    crs: new FormControl("", Validators.required),
  })
  getMyCourses(){
    this.service.getMyCourses().subscribe(courses =>{
      this.courses = courses;
      console.log(this.courses);
      }
    )
}
  isemp = false;
  submitCourse() {
    if(this.updateForm.valid){
      console.log(this.updateForm.value.crs);
      // @ts-ignore
      this.getAllStudents(this.updateForm.value.crs)
      if(this.dataSource == null){
        this.isemp = false;

      }else this.isemp = true;
    }
  }
}

