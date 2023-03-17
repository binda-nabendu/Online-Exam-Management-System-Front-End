import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {QuestionScript} from "../../../model/QuestionScript";
import {FormControl} from "@angular/forms";
import {StudentService} from "../../../service/student.service";
import {AnswerScript} from "../../../model/AnswerScript";
import alertify from "alertifyjs";
import {QuestionSummery} from "../../../model/QuestionSummery";

@Component({
  selector: 'app-question-paper-with-ans-script',
  templateUrl: './question-paper-with-ans-script.component.html',
  styleUrls: ['./question-paper-with-ans-script.component.css']
})
export class QuestionPaperWithAnsScriptComponent implements OnInit{
  constructor(private stdService: StudentService, private userService: UserService) {
    this.allAnsReceiver = [[]];

  }

  collegeName: string = 'GURUGRIHO PATHSHALA';

  allAnsReceiver: FormControl[][];
  questions: QuestionScript = {
    examId: 13,
    teacherId: "6118194062 This is Demo Question Main Question Not present Now",
    courseCode: "CSE315",
    deptId:"2019",
    percentageValue: 0.5,
    startingDateTime: "2022-07-18 18:22:30",
    endingDateTime: "2022-07-18 20:22:30",
    courseSession: 1,
    total: 10,
    allIndividualQuestions: [
      {
        questionNo: 1,
        question: "░what is the pring statement in c++",
        mark: 2.0,
        allOptions: [
          {
            optionNo: 1,
            optionValue: "wrdc",
            ansStatus: false
          },
          {
            optionNo: 2,
            optionValue: "cdrc",
            ansStatus: false
          },
          {
            optionNo: 3,
            optionValue: "cout",
            ansStatus: true
          },
          {
            optionNo: 4,
            optionValue: "cin",
            ansStatus: false
          }
        ]
      },
      {
        questionNo: 2,
        question: "▒How maney operand are there",
        mark: 3,
        allOptions: [
          {
            optionNo: 1,
            optionValue: "2",
            ansStatus: false
          },
          {
            optionNo: 2,
            optionValue: "4",
            ansStatus: false
          },
          {
            optionNo: 3,
            optionValue: "jhkljh",
            ansStatus: true
          },
          {
            optionNo: 4,
            optionValue: "dgs",
            ansStatus: true
          }
        ]
      },
      {
        questionNo: 3,
        question: "▓What is programming language",
        mark: 2,
        allOptions: [
        ]
      }
    ]
  }
  qid: number = 0;
  stdId: any;


  ngOnInit(): void {
    // console.log(this.data.userDetails);
    this.stdService.examHistory("exams/immediate-upcoming").subscribe(qsnHead=>{
      this.qid = qsnHead[0].examId;
    });
    this.requestForQuestion();
    this.stdId = this.userService.getId();
    this.preprocess();
  }
  private requestForQuestion() {
    this.stdService.getExamPaper(this.qid).subscribe(qs=>{
      if(qs != null)
        this.questions = qs;
    })
  }
  preprocess(){
    for(let i in this.questions.allIndividualQuestions){
      this.allAnsReceiver.push([]);
      if(this.questions.allIndividualQuestions[i].allOptions.length > 0 && this.questions.allIndividualQuestions[i].question.charAt(0) != '░') {
        for (let j in this.questions.allIndividualQuestions[i].allOptions) {
          this.allAnsReceiver[i].push(new FormControl(""));
        }
      }
      else{
        this.allAnsReceiver[i].push(new FormControl(""));
      }
    }
  }

  submit() {
    alertify.confirm("Re Examine Request", "did you really want to re examine this script?", () => {


      let ans: AnswerScript = {
        examId: this.questions.examId,
        stdId: this.stdId,
        allQuestionAnswer: []
      }
      for (let i in this.questions.allIndividualQuestions) {
        if (this.questions.allIndividualQuestions[i].allOptions.length > 0 && this.questions.allIndividualQuestions[i].question.charAt(0) != '░') {
          for (let j in this.questions.allIndividualQuestions[i].allOptions) {
            if (this.allAnsReceiver[i][j].value == true) {
              ans.allQuestionAnswer.push({
                questionNo: this.questions.allIndividualQuestions[i].questionNo,
                optionNo: this.questions.allIndividualQuestions[i].allOptions[j].optionNo,
                value: ''
              });
            }

          }
        } else if (this.questions.allIndividualQuestions[i].question.charAt(0) == '░') {
          ans.allQuestionAnswer.push({
            questionNo: this.questions.allIndividualQuestions[i].questionNo,
            optionNo: this.allAnsReceiver[i][0].value,
            value: ''
          })
        } else {
          ans.allQuestionAnswer.push({
            questionNo: this.questions.allIndividualQuestions[i].questionNo,
            optionNo: 1,
            value: this.allAnsReceiver[i][0].value
          })
        }
      }
      console.log(ans);
      // then we redirect it to dashboard


    }, function () {
    });
  }


}
