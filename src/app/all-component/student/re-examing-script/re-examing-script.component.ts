import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../service/student.service";
import {Course} from "../../../model/Course";
import alertify from "alertifyjs";
import {QuestionSummery} from "../../../model/QuestionSummery";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../model/User";

@Component({
  selector: 'app-re-examing-script',
  templateUrl: './re-examing-script.component.html',
  styleUrls: ['./re-examing-script.component.css']
})
export class ReExamingScriptComponent   implements OnInit{
  constructor(private stdService: StudentService, private service: StudentService, private router: Router, private route: ActivatedRoute) {
    this.reqCrs = new Set<Course>();
    this.dataSource = [];
    this.path = '';
    this.buttonName = "";
  }
  ngOnInit(): void {
    this.route.url.subscribe(url=>{
      this. path = url[0].path;
      if(this.path == 're-examined'){
        this.buttonName = 'Re-Examined';
      }else{
        this.buttonName = 'REQUEST';
      }
    })
    this.getAllStudentRequestedCourse();
  }
  path: string;
  displayedColumnName: string[] = ['Exam Id', 'Course', 'Dept Id', 'Start', 'Total Mark', 'Details'];
  displayedColumns: string[] = ['examId', 'courseCode', 'deptId', 'startingDateTime', 'total',  'teacherId'];
  dataSource:QuestionSummery[];
  isemp = false;
  getAllStudentRequestedCourse(){
    this.stdService.examHistory("exams/previous").subscribe(req =>{
      this.dataSource = req;
      if(this.dataSource.length <= 0){
        this.isemp = false;

      }else this.isemp = true;
    })
  }
  buttonName: string;
  reqCrs : any;
  takeAction(element: QuestionSummery) {
    if(this.path == 're-examined') {
      alertify.confirm("Re Examine Request", "did you really want to re examine this script?", () => {
        this.stdService.sendForReExaming(element.examId);
        alertify.success("Re Examine Request Successfully Completed");
      }, function () {
      });
    }else if(this.path == 'request-ans-script') {
      this.stdService.getUserInfo(element.teacherId).subscribe(usr =>{
        const emailTo = usr.email;
        const subject = "Request for publishing result of Id:"+ element.examId+" exam:" +element.courseCode;
        const body = 'white your email';
        window.location.href = `https://mail.google.com/mail/?view=cm&to=${emailTo}&su=${subject}&body=${body}`;
      });

    }
  }

}
