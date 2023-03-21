import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {AdminService} from "../../../service/admin.service";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {regStd} from "../../../model/regStd";
import {PopupComponent} from "../../admin/popup/popup.component";
import {SelectedQuestionComponent} from "../selected-question/selected-question.component";
import {QuestionSummery} from "../../../model/QuestionSummery";

@Component({
  selector: 'app-my-question',
  templateUrl: './my-question.component.html',
  styleUrls: ['./my-question.component.css']
})
export class MyQuestionComponent implements OnInit{
  constructor(private tecService: TeacherService, private admService: AdminService, private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.getMyQuestionList();
  }
   displayedColumnName: string[] = ['Exam Id', 'Course', 'Dept Id', 'Start', 'Total Mark', 'Details'];
  displayedColumns: string[] = ['examId', 'courseCode', 'deptId', 'startingDateTime', 'total',  'teacherId'];
  dataSource:any;
  isemp = false;
  getMyQuestionList(){
    this.tecService.getQuestionHeadDependOnLink("teacher/all-questions").subscribe(student =>{
      this.dataSource = student;
      // console.log(student);
      if(this.dataSource.length <= 0){
        this.isemp = false;

      }else this.isemp = true;
    })
  }
  updateForm = new FormGroup({
    crs: new FormControl("", Validators.required),
  })

  FunctionUpdate(user: QuestionSummery) {
    this.dialog.open(SelectedQuestionComponent,{
      width: '80%',
      height: '80%',
      exitAnimationDuration: '500ms',
      enterAnimationDuration:'500ms',
      data:{
        userDetails: user.examId,
      }
    })
  }
}
