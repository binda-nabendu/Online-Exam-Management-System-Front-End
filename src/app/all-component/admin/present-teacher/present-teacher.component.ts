import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";

@Component({
  selector: 'app-present-teacher',
  templateUrl: './present-teacher.component.html',
  styleUrls: ['./present-teacher.component.css']
})
export class PresentTeacherComponent implements OnInit{
  constructor(private service: TeacherService) {
  }
  ngOnInit(): void {
    this.getAllTeacher();
  }
  displayedColumnName: string[] = ['NID', 'User Name', 'Father Name', 'Mother Name','Contact No', 'Email', 'DOB', 'Address', 'Educational Qualification','Expert'];
  displayedColumns: string[] = ['nid', 'userName', 'fatherName', 'motherName', 'contactNo', 'email', 'dob', 'address', 'eduQualification','expertise'];
  dataSource:any;
  getAllTeacher(){
    this.service.getAllTeacher().subscribe(teacher =>{
      this.dataSource = teacher;
      // console.log(teacher)
    })
  }


}
