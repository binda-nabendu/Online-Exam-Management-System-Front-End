import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../service/admin.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {regStd} from "../../../model/regStd";
import {RequestedCourses} from "../../../model/RequestedCourses";

@Component({
  selector: 'app-requested-course-by-student',
  templateUrl: './requested-course-by-student.component.html',
  styleUrls: ['./requested-course-by-student.component.css']
})
export class RequestedCourseByStudentComponent implements OnInit{
  constructor(private admService: AdminService) {
  }
  ngOnInit(): void {
    this.getAllStudentRequestedCourse();
  }
  displayedColumnName: string[] = ['stdId', 'deptId', 'batch','semester', 'courseCode','courseName', 'Action'];
  displayedColumns: string[] = ['stdId', 'deptId', 'batch', 'semester', 'courseCode', 'courseName', 'teacherId'];
  dataSource:any;
  isemp = false;
  getAllStudentRequestedCourse(){
    this.admService.stdReqCrs().subscribe(req =>{
      this.dataSource = req;
      if(this.dataSource.length <= 0){
        this.isemp = false;

      }else this.isemp = true;
    })
  }
  FunctionUpdate(user: regStd) {

  }

  FunctionDelete(element: RequestedCourses) {
    this.admService.deleteReqCourse(element).subscribe( t =>{
      this.getAllStudentRequestedCourse();
    });
  }

  FunctionAdd(element: RequestedCourses) {
    this.admService.approveReqCourse(element).subscribe( t =>{
      this.getAllStudentRequestedCourse();
    });
  }
}
