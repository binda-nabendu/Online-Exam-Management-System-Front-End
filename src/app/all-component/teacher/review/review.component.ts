import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";
import {ExaminSelectScriptComponent} from "../examin-select-script/examin-select-script.component";
import {Review} from "../../../model/Review";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent  implements OnInit{
  constructor(private tecService: TeacherService, private route: ActivatedRoute,  private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.getRequestReviewStudentList();
    // console.log(this.dataSource);
  }
  displayedColumnName: string[] =  ['Exam Id', 'Course Code','Name', 'Marks','See Script'];
  displayedColumns: string[] = ['examId', 'courseCode','stdName', 'gotTotalMarks','stdId'];
  dataSource:Review[] = [];

  isemp = false;
  grade = new FormControl("", [Validators.required]);
  getRequestReviewStudentList(){
    this.tecService.reviewList().subscribe(stds => {
      this.dataSource = stds;
      if(this.dataSource != null) this.isemp = true;
    })
  }
  questionPaper: any;
  openScript(element: Review) {
    this.tecService.getQuestion(element.examId).subscribe( qp =>{
      this.questionPaper = qp;
    });
    this.dialog.open(ExaminSelectScriptComponent,{
      width: '80%',
      height: '80%',
      exitAnimationDuration: '500ms',
      enterAnimationDuration:'500ms',
      data:{
        userDetails: {examId: element.examId, stdId: element.stdId , question: this.questionPaper},
      }
    })
  }
}
