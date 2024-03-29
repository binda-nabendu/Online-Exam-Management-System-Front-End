import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {ExaminSelectScriptComponent} from "../examin-select-script/examin-select-script.component";

@Component({
  selector: 'app-examine-ans-script',
  templateUrl: './examine-ans-script.component.html',
  styleUrls: ['./examine-ans-script.component.css']
})
export class ExamineAnsScriptComponent  implements OnInit{
  constructor(private userService: UserService,private tecService: TeacherService, private router: Router, private route: ActivatedRoute,  private dialog: MatDialog) {
    this.link = 'waiting-for-examining-question-list';
    this.btnNm = '';
  }
  ngOnInit(): void {
    this.route.url.subscribe(url=>{
      // console.log(url[0].path +"/"+url[1].path);
      this.link = url[0].path;

    })
    if(this.link == 'waiting-for-examining-question-list'){
      this.displayedColumnName = ['Exam Id', 'Course', 'Dept Id', 'Start', 'Total Mark', 'See Script'];
      this.displayedColumns = ['examId', 'courseCode', 'deptId', 'startingDateTime', 'total',  'teacherId'];
      this.getAllNonPublishedExam();
      this.btnNm = 'See All Script';
    }else if(this.link == 'student-list-of-that-exam'){
      this.displayedColumnName = ['Name', 'Father Name', 'Mother Name','Contact No', 'Department', 'SEE'];
      this.displayedColumns = ['userName', 'fatherName', 'motherName', 'contactNo', 'deptId', 'semester'];
      this.btnNm = 'Examining Script';
      this.getStdList();
    }
  }
  questionPaper: any;
  link : string;
  btnNm: string;
  displayedColumnName: string[] = [];
  displayedColumns: string[] = [];
  dataSource:any;
  isemp = false;
  getAllNonPublishedExam(){
    this.tecService.getQuestionHeadDependOnLink("teacher/all-pending-result").subscribe(list =>{
      this.dataSource = list;
      if(this.dataSource.length <= 0){
        this.isemp = false;

      }else this.isemp = true;
    })
  }
  updateForm = new FormGroup({
    crs: new FormControl("", Validators.required),
  })

  FunctionUpdate(element: any) {
    let frontLink : string = '';
    if(this.userService.getRole()=='TEACHER'){
      frontLink = 'teacher/teacher-dashboard/';
    }else {
      frontLink = 'admin/admin-dashboard/';
    }
    if(this.link == 'waiting-for-examining-question-list'){
      this.router.navigate([frontLink+'student-list-of-that-exam/'+element.examId]);
    }else if(this.link == 'student-list-of-that-exam'){
      // console.log(this.questionPaper);
      this.dialog.open(ExaminSelectScriptComponent,{
        width: '80%',
        height: '80%',
        exitAnimationDuration: '500ms',
        enterAnimationDuration:'500ms',
        data:{
          userDetails: {examId: this.examId, stdId: element.nid , question: this.questionPaper},
        }
      })
    }
  }
  examId:any;
  private getStdList() {
    if(this.route.snapshot.paramMap.get('examId') != null){
      this.examId = this.route.snapshot.paramMap.get('examId');

      this.tecService.getQuestion(this.examId).subscribe( qp =>{
        this.questionPaper = qp;
      });
      //@ts-ignore
      this.tecService.getStdList(this.route.snapshot.paramMap.get('examId')).subscribe(std =>{
        this.dataSource = std;
        if(this.dataSource.length <= 0){
          this.isemp = false;

        }else this.isemp = true;
      });
    }
  }
}
