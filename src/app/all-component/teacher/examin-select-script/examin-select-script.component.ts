import {Component, Inject, OnInit} from '@angular/core';
import {StudentService} from "../../../service/student.service";
import {UserService} from "../../../service/user.service";
import {FormControl, Validators} from "@angular/forms";
import {QuestionScript} from "../../../model/QuestionScript";
import alertify from "alertifyjs";
import {AnswerScript} from "../../../model/AnswerScript";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AdminService} from "../../../service/admin.service";
import {TeacherService} from "../../../service/teacher.service";
import {StudentMark} from "../../../model/StudentMark";

@Component({
  selector: 'app-examin-select-script',
  templateUrl: './examin-select-script.component.html',
  styleUrls: ['./examin-select-script.component.css']
})
export class ExaminSelectScriptComponent  implements OnInit{
  constructor(private stdService: StudentService, @Inject(MAT_DIALOG_DATA) public data: any, private tecService: TeacherService,
              private ref: MatDialogRef<ExaminSelectScriptComponent>) {
    this.allAnsReceiver = [[]];

  }

  collegeName: string = 'GURUGRIHO PATHSHALA';

  allAnsReceiver: FormControl[][];
  questions: QuestionScript = {examId: 0, teacherId: "", courseCode: "", deptId:"", percentageValue: 0.5, startingDateTime: "",
                                endingDateTime: "", courseSession: 1, total: 10, allIndividualQuestions: []}
  answerScript : AnswerScript = {examId: 0, stdId: "", allQuestionAnswer: []};

  stdId = "";
  mark = new FormControl("", [Validators.required]);
  ngOnInit(): void {
    this.preprocess();
    // console.log(this.data.userDetails);
  }

  preprocess(){
    this.questions = this.data.userDetails.question;
    this.tecService.reqFroAnsScript(this.data.userDetails.examId, this.data.userDetails.stdId).subscribe(as=>{
      // console.log(as);
      this.answerScript = as;
      // console.log(this.answerScript);
    });
    // console.log(this.questions);
  }

  submit(){
    if(this.mark.valid){
      let stdMark: StudentMark = {
        stdId: this.answerScript.stdId,
        deptId: this.questions.deptId,
        courseCode: this.questions.courseCode,
        examId: this.questions.examId,
        gotTotalMark: Number(this.mark.value),
        review: false,
      }
      this.tecService.sendMark(stdMark);
      alertify.success("Done!");
      this.ref.close();
    }
  }

  close() {
    this.ref.close();
  }
}
