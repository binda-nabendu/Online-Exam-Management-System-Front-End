import { Component } from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {AdminService} from "../../../service/admin.service";
import {Course} from "../../../model/Course";
import {regTec} from "../../../model/regTec";
import {UserService} from "../../../service/user.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.css']
})
export class QuestionPaperComponent {
  constructor(private tecService: TeacherService, private userService: UserService) {
  }
  courses: Course[] = [];
  selectedCourse: { courseCode: string; deptId: string ; courseName: string} = {courseCode:'',deptId:'', courseName:''};
  collegeName: string = 'GURUGRIHO PATHSHALA';
  percent = new FormControl('',[Validators.required]);
  examId = new FormControl('',[Validators.required]);
  teacherId: string = '';
  marks = new FormControl('',[Validators.required]);
  session = new FormControl('',[Validators.required]);
  ngOnInit(): void {
    this.getAllCourse();
    this.teacherId = this.userService.getId()
  }

  getAllCourse(){
    this.tecService.allCourses().subscribe(crs =>{
      this.courses = crs;
    });
  }

}
