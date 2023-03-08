import { Component } from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {Course} from "../../../model/Course";
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
  startDateTime = new FormControl('',[Validators.required]);
  endDateTime = new FormControl('',[Validators.required]);
  questions: number[] = [];
  options: any[] = [];
  floatLabelControl = new FormControl('', [Validators.required]);
  ngOnInit(): void {
    this.getAllCourse();
    this.teacherId = this.userService.getId()
  }

  getAllCourse(){
    this.tecService.myCourses().subscribe(crs =>{
      this.courses = crs;
    });
  }

  createQuestion() {
    this.questions.push(1);
    this.options.push(1);
  }

  createOption() {
    this.options.push(1);
  }
}
