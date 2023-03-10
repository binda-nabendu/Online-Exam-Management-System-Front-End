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
    this.allOptionTypeReceiver = [];
    this.markReceiver = [];
    this.allOptionReceiver = [[]];
    this.allOptionStateReceiver = [[]];
  }
  courses: Course[] = [];
  selectedCourse: { courseCode: string; deptId: string ; courseName: string ; courseSessions: number} = {courseCode:'',deptId:'', courseName:'', courseSessions: -1};
  collegeName: string = 'GURUGRIHO PATHSHALA';
  percent = new FormControl(0.3,[Validators.required]);
  examId = new FormControl('',[Validators.required]);
  teacherId: string = '';
  marks = new FormControl(20,[Validators.required]);
  session = new FormControl({value:'Auto Generated', disabled: true}, [Validators.required]);
  startDateTime = new FormControl('2023-07-18 20:22:30',[Validators.required]);
  endDateTime = new FormControl('',[Validators.required]);
  questions: IndividualQuestion[] = [];
  floatLabelControl = new FormControl('', [Validators.required]);
  allQuestionReceiver: FormControl[];
  allOptionTypeReceiver: FormControl[];
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
    this.allOptionTypeReceiver.push(new FormControl('', [Validators.required]));
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
      if(this.allQuestionReceiver[t].valid && this.markReceiver[t].value > 0 && this.allOptionTypeReceiver[t].valid) {
        this.questions[t].question = this.allOptionTypeReceiver[t].value + this.allQuestionReceiver[t].value;
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
      percentageValue: this.percent.value == null ? .001 : this.percent.value,
      startingDateTime: (this.startDateTime.value ?? "2021-07-18 20:22:30").toString(),
      endingDateTime: (this.endDateTime.value ?? "2021-07-18 20:22:30").toString(),
      courseSession: this.selectedCourse.courseSessions,
      total: this.marks.value == null? 0 : this.marks.value,
      allIndividualQuestions: this.questions
    };
    if(qs.teacherId.length < 1 || qs.courseCode.length < 1 || qs.deptId.length < 1 || qs.percentageValue == 0.001 ||
      qs.startingDateTime == "2021-07-18 20:22:30" || qs.endingDateTime == "2021-07-18 20:22:30" || qs.courseSession < 1 ||
      qs.total == 0){
      alertify.error("Please fill all header with proper value");
      return;
    }
    alertify.confirm("Submit Question", "Do you want to submit this question ?", ()=>{
      const jsonData = JSON.stringify(qs);
      console.log(jsonData);

      // this.tecService.setQuestion(jsonData).subscribe(t=>{
      //   console.log(t);
      // })
    },function(){});

  }
}
