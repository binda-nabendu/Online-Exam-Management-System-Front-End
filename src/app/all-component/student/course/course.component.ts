import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../../../service/student.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{
  constructor(private service: StudentService, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.url.subscribe(url=>{
      this.getCourses(url[0].path);
    })
  }
  displayedColumnName: string[] = ['Department Id', 'Course Code', 'Course Name', 'Teacher Id'];
  displayedColumns: string[] = ['deptId', 'courseCode', 'courseName', 'teacherId'];
  dataSource:any;
  private getCourses(path: string) {
      this.service.Courses(path).subscribe(course =>{
        this.dataSource = course;
        // console.log(path);
      })
  }
}
