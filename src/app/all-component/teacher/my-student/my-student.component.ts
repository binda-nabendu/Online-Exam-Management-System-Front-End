import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {StudentService} from "../../../service/student.service";

@Component({
  selector: 'app-my-student',
  templateUrl: './my-student.component.html',
  styleUrls: ['./my-student.component.css']
})
export class MyStudentComponent implements OnInit{
  constructor(private service: StudentService) {
  }
  ngOnInit(): void {

  }
  displayedColumnName: string[] = ['User Name', 'Father Name', 'Mother Name','Contact No', 'Email', 'Address', 'Department', 'Semester'];
  displayedColumns: string[] = ['userName', 'fatherName', 'motherName', 'contactNo', 'email', 'address', 'deptId', 'semester'];
  dataSource:any;
  getAllStudents(courseCode: String){
    this.service.getAllStudent(courseCode).subscribe(student =>{
      this.dataSource = student;
      console.log(student)
    })
  }
}

