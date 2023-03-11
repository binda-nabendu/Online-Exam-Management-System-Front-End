import {Component, Inject, OnInit} from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {UserService} from "../../../service/user.service";
import {Course} from "../../../model/Course";
import {FormControl, Validators} from "@angular/forms";
import {QuestionScript} from "../../../model/QuestionScript";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PopupComponent} from "../../admin/popup/popup.component";
import {AdminService} from "../../../service/admin.service";

@Component({
  selector: 'app-selected-question',
  templateUrl: './selected-question.component.html',
  styleUrls: ['./selected-question.component.css']
})
export class SelectedQuestionComponent implements OnInit{
  constructor(private tecService: TeacherService, private userService: UserService, @Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<PopupComponent>) {

  }
  courses: Course[] = [];
  collegeName: string = 'GURUGRIHO PATHSHALA';


  questions: QuestionScript = {
    teacherId: "6118194062",
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
        question: "what is the pring statement in c++",
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
        question: "How maney operand are there",
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
          }
        ]
      }
    ]
  }

  ngOnInit(): void {
    // console.log(this.data.userDetails);
    this.requestForQuestion(this.data.userDetails);
  }

  close() {
    this.ref.close();
  }

  private requestForQuestion(id: string) {
    this.tecService.getQuestion(id).subscribe(q=>{
      this.questions = q;
    })
  }
}
