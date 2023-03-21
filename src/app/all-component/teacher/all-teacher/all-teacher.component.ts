import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";

@Component({
  selector: 'app-all-teacher',
  templateUrl: './all-teacher.component.html',
  styleUrls: ['./all-teacher.component.css']
})

export class AllTeacherComponent implements OnInit{
  constructor(private service: TeacherService) {
  }
  ngOnInit(): void {
    this.getAllTeacher();
  }
  displayedColumnName: string[] = ['Name','Contact No', 'Email', 'Address', 'Educational Qualification','Expert'];
  displayedColumns: string[] = ['userName', 'contactNo', 'email', 'address', 'eduQualification','expertise'];
  dataSource:any;
  getAllTeacher(){
    this.service.getAllTeacher().subscribe(teacher =>{
      this.dataSource = teacher;
      // console.log(teacher)
    })
  }
}

