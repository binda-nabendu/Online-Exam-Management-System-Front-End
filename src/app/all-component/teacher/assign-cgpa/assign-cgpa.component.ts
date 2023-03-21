import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TeacherService} from "../../../service/teacher.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-assign-cgpa',
  templateUrl: './assign-cgpa.component.html',
  styleUrls: ['./assign-cgpa.component.css']
})
export class AssignCgpaComponent implements OnInit{
  constructor(private service: TeacherService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getAssignableAtudent();
    // console.log(this.dataSource);
  }
  displayedColumnName: string[] = ['Department Id', 'Course Code', 'Course Name', 'Teacher Id'];
  displayedColumns: string[] = ['deptId', 'courseCode', 'courseName', 'teacherId'];
  dataSource:any;

  isemp = false;
  grade = new FormControl("", [Validators.required]);
  getAssignableAtudent(){
    if(this.route.snapshot.paramMap.get('courseCode') != null) {
      this.service.assignableStudentOfThatCourse(String(this.route.snapshot.paramMap.get('courseCode'))).subscribe(stds => {
        this.dataSource = stds;
        if(this.dataSource != null) this.isemp = true;
      })
    }
  }

  sendMark() {
      if(this.grade.valid){
        this.service.assignCgpa();
      }
  }
}
