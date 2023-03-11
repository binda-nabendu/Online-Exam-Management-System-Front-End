import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {AdminService} from "../../../service/admin.service";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {regStd} from "../../../model/regStd";
import {PopupComponent} from "../popup/popup.component";
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
  updateForm = new FormGroup({
    crs: new FormControl("", Validators.required),
  })

  FunctionUpdate(user: regStd) {

  }

  FunctionDelete(element: RequestedCourses) {
    this.admService.deleteReqCourse(element);
    this.getAllStudentRequestedCourse();

  }

  FunctionAdd(element: RequestedCourses) {
    this.admService.approveReqCourse(element);
    this.getAllStudentRequestedCourse();
  }
}
