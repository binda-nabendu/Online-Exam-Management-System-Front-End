import { Component } from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {Course} from "../../../model/Course";
import {UserService} from "../../../service/user.service";
import {FormArray, FormControl, Validators} from "@angular/forms";
import {QuestionScript} from "../../../model/QuestionScript";
import {IndividualQuestion} from "../../../model/IndividualQuestion";
import {Option} from "../../../model/Option";
import alertify from "alertifyjs";

@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.css']
})
export class QuestionPaperComponent {
  constructor(private tecService: TeacherService, private userService: UserService) {
    this.allQuestionReceiver = [];
    this.markReceiver = [];
    this.allOptionReceiver = [[]];
    this.allOptionStateReceiver = [[]];
  }
  courses: Course[] = [];
  selectedCourse: { courseCode: string; deptId: string ; courseName: string} = {courseCode:'',deptId:'', courseName:''};
  collegeName: string = 'GURUGRIHO PATHSHALA';
  percent = new FormControl(0.3,[Validators.required]);
  examId = new FormControl('',[Validators.required]);
  teacherId: string = '';
  marks = new FormControl(20,[Validators.required]);
  session = new FormControl(2,[Validators.required]);
  startDateTime = new FormControl('2023-07-18 20:22:30',[Validators.required]);
  endDateTime = new FormControl('',[Validators.required]);
  optionValue = new FormControl('',[Validators.required]);
  optionState = new FormControl('',[Validators.required]);

  questions: IndividualQuestion[] = [];

  floatLabelControl = new FormControl('', [Validators.required]);

  iQuestion = new FormControl('', [Validators.required]);
  mark = new FormControl('', [Validators.required]);

  allQuestionReceiver: FormControl[];

  allOptionReceiver: FormControl[][];
  allOptionStateReceiver: FormControl[][];
  markReceiver: FormControl[];

  ngOnInit(): void {
    this.getAllCourse();
    this.teacherId = this.userService.getId()
  }
  getAllCourse(){
    this.tecService.myCourses().subscribe(crs =>{
      this.courses = crs;
    });
  }
  optionTracker: number[]=[];
  qId: number = 0;

  createQuestion() {
    this.questions.push({
      questionNo: this.qId + 1,
      question: '',
      mark: 0,
      allOptions: [

      ]
    });
    this.optionTracker.push(0);
    this.allQuestionReceiver.push(new FormControl('', [Validators.required]));
    this.markReceiver.push(new FormControl('', [Validators.required]));
    this.allOptionReceiver.push([]);
    this.allOptionStateReceiver.push([]);
    this.qId++;
  }

  createOption(questionNo: number) {
    let properQuestionNo: number = questionNo - 1;
    this.questions[properQuestionNo].allOptions.push({
      optionNo: this.optionTracker[properQuestionNo] + 1,
        optionValue: '',
        ansStatus: false
    });
    this.allOptionReceiver[properQuestionNo].push(new FormControl('', [Validators.required]));
    this.allOptionStateReceiver[properQuestionNo].push(new FormControl('0', [Validators.required]));
    this.optionTracker[properQuestionNo]++;
  }

  SubmitQuestion() {
    for (let t in this.allQuestionReceiver){
      if(this.allQuestionReceiver[t].valid && this.markReceiver[t].value > 0) {
        this.questions[t].question = this.allQuestionReceiver[t].value;
        this.questions[t].mark = this.markReceiver[t].value;
        for(let o in this.allOptionReceiver[t]){
          if(this.allOptionReceiver[t][o].valid){
            this.questions[t].allOptions[o].optionValue = this.allOptionReceiver[t][o].value;
          }else{
            alertify.error("Please fill all option and their state");
            return;
          }
        }
      }else{
        alertify.error("Please fill all question and mark");
        return;
      }
    }
    let qs: QuestionScript = {
      teacherId: this.teacherId,
      courseCode: this.selectedCourse.courseCode,
      deptId:this.selectedCourse.deptId,
      percentageValue: this.percent.value == null ? .3 : this.percent.value,
      startingDateTime: (this.startDateTime.value ?? "2023-07-18 20:22:30").toString(),
      endingDateTime: (this.endDateTime.value ?? "2023-07-18 20:22:30").toString(),
      courseSession: this.session.value == null? -33 : this.session.value,
      total: this.marks.value == null? 20 : this.marks.value,
      allIndividualQuestions: this.questions
    };
    console.log(qs);
  }
}
