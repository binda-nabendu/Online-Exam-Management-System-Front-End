import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit{
  constructor(private service: TeacherService) {
  }
  ngOnInit(): void {
    this.getAllCourses();
  }
  displayedColumnName: string[] = ['Department Id', 'Course Code', 'Course Name', 'Teacher Id'];
  displayedColumns: string[] = ['deptId', 'courseCode', 'courseName', 'teacherId'];
  dataSource:any;
  getAllCourses(){
    this.service.allCourses().subscribe(course =>{
      this.dataSource = course;
    })
  }
}

