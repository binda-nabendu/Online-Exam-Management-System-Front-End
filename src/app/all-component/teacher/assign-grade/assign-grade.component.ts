import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {QuestionSummery} from "../../../model/QuestionSummery";

import {Router} from "@angular/router";

import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-assign-grade',
  templateUrl: './assign-grade.component.html',
  styleUrls: ['./assign-grade.component.css']
})
export class AssignGradeComponent  implements OnInit{
  constructor(private tecService: TeacherService, private router: Router, private userService: UserService) {
  }
  ngOnInit(): void {
    this.getAllCourses();
  }
  displayedColumnName: string[] = ['Department Id', 'Course Code', 'Course Name', 'Teacher Id', 'Action'];
  displayedColumns: string[] = ['deptId', 'courseCode', 'courseName', 'teacherId', 'courseSession'];
  dataSource:any;
  isemp = false;
  getAllCourses(){
    this.tecService.myCourses().subscribe(course =>{
      this.dataSource = course;
      this.isemp = true;
    })
  }
  FunctionUpdate(user: QuestionSummery) {
    let courseCode = this.dataSource.courseCode;
    let frontLink : string = '';
    if(this.userService.getRole()=='TEACHER'){
      frontLink = 'teacher/teacher-dashboard/';
    }else {
      frontLink = 'admin/admin-dashboard/';
    }
      this.router.navigate([frontLink+'assign-cgpa/'+courseCode]);


  }
}
