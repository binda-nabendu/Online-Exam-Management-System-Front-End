import { Component } from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent {
  constructor(private service: TeacherService) {
  }
  ngOnInit(): void {
    this.getAllStudents();
  }
  displayedColumnName: string[] = ['User Name', 'Father Name', 'Mother Name','Contact No', 'Email', 'Address', 'Department', 'Semester'];
  displayedColumns: string[] = ['userName', 'fatherName', 'motherName', 'contactNo', 'email', 'address', 'deptId', 'semester'];
  dataSource:any;
  isemp = false;
  getAllStudents(){
    this.service.getAllStudents().subscribe(student =>{
      this.dataSource = student;
      console.log(student);
      if(this.dataSource.length <= 0){
        this.isemp = false;

      }else this.isemp = true;
    })
  }
  updateForm = new FormGroup({
    crs: new FormControl("", Validators.required),
  })

}
