import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../service/student.service";
import {Course} from "../../../model/Course";
import alertify from "alertifyjs";
import {Router} from "@angular/router";
import {catchError, of} from "rxjs";

@Component({
  selector: 'app-request-for-course',
  templateUrl: './request-for-course.component.html',
  styleUrls: ['./request-for-course.component.css']
})
export class RequestForCourseComponent  implements OnInit{
  constructor(private stdService: StudentService, private router: Router) {
    this.reqCrs = new Set<Course>();
  }
  ngOnInit(): void {
    this.getAllStudentRequestedCourse();
  }
  displayedColumnName: string[] = ['Department Id', 'Course Code', 'Course Name', 'Teacher Id', 'Action'];
  displayedColumns: string[] = ['deptId', 'courseCode', 'courseName', 'teacherId', 'courseSessions'];
  dataSource:any;
  isemp = false;
  getAllStudentRequestedCourse(){
    this.stdService.Courses("departmental-course").subscribe(req =>{
      this.dataSource = req;
      if(this.dataSource.length <= 0){
        this.isemp = false;

      }else this.isemp = true;
    })
  }
  reqCrs : any;
  FunctionAdd(element: Course) {
      this.reqCrs.add(element);
      alertify.success("add successfully");
  }

  FunctionSubmit() {
    let reqCourse : Course[] = [];
    for(const e of this.reqCrs){
      // console.log(e);
      reqCourse.push(e);
    }
    if(reqCourse.length > 0){
      // issue may send same things multiple time have to handle it

      this.stdService.requestForCourses(reqCourse).pipe(catchError(t=>{
        if(t.error instanceof ErrorEvent)
        alertify.error("Course Request failed");
        return of(null);
      })).subscribe(t=>{
        console.log(t);
        if(t != null){
          alertify.success("Course Requested Successful");
          // this.router.navigate(['student-dashboard/my-courses']);
        }else{
          alertify.error("Course Request failed");
        }
      });



    }
  }
}
