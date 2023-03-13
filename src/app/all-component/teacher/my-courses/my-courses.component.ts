import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit{
  constructor(private service: TeacherService) {
  }
  ngOnInit(): void {
    this.getAllCourses();
    console.log(this.dataSource);
  }
  displayedColumnName: string[] = ['Department Id', 'Course Code', 'Course Name', 'Teacher Id'];
  displayedColumns: string[] = ['deptId', 'courseCode', 'courseName', 'teacherId'];
  dataSource:any;
  getAllCourses(){
    this.service.myCourses().subscribe(course =>{
      this.dataSource = course;
    })
  }
}
