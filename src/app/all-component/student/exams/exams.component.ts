import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../service/student.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent  implements OnInit{
  constructor(private service: StudentService, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.url.subscribe(url=>{
      // console.log(url[0].path +"/"+url[1].path);
      this.getExamHistory(url[0].path +"/"+url[1].path);
    })
  }
  displayedColumnName: string[] = ['Exam Id', 'Course', 'Dept Id', 'Start', 'Total Mark', 'Details'];
  displayedColumns: string[] = ['examId', 'courseCode', 'deptId', 'startingDateTime', 'total',  'teacherId'];
  dataSource:any;
  private getExamHistory(path: string) {
    this.service.examHistory(path).subscribe(course =>{
      this.dataSource = course;
      // console.log(path);
    })
  }
}
