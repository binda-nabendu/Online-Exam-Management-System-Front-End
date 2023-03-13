import {Component, OnInit} from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import {Course} from "../../../model/Course";
import {TeacherService} from "../../../service/teacher.service";
import {regTec} from "../../../model/regTec";
import alertify from "alertifyjs";

@Component({
  selector: 'app-assign-teacher-to-subject',
  templateUrl: './assign-teacher-to-subject.component.html',
  styleUrls: ['./assign-teacher-to-subject.component.css']
})
export class AssignTeacherToSubjectComponent implements OnInit{
  constructor(private tecService: TeacherService, private adminService: AdminService) {
  }
  courses: Course[] = [];
  selectedCourse: { courseCode: string; deptId: string } = {courseCode:'',deptId:''};
  teachers: regTec[] = [];
  selectedTeacher: { nid:string } = {nid:''};

  ngOnInit(): void {
    this.getAllCourse();
    this.getAllTec();

  }
  getAllCourse(){
    this.tecService.allCourses().subscribe(crs =>{
      this.courses = crs;
    });
  }

  private getAllTec() {
    this.tecService.getAllTeacher().subscribe( allTeacher =>{
      this.teachers = allTeacher;
    })
  }

  reqToAssignCourse() {
    if(this.selectedCourse.courseCode != '' && this.selectedTeacher.nid != ''){
      let formData: FormData = new FormData();
      formData.append('courseCode', this.selectedCourse.courseCode);
      formData.append('deptId', this.selectedCourse.deptId);
      formData.append('teacherId', this.selectedTeacher.nid);

      this.adminService.assingTecToCourse(formData).subscribe( msg =>{
        if(msg != null)
          alertify.success("Teacher assign Successful!");
        else{
          alertify.failed("Internal Error Occurred!");
        }
      })
    }
  }
}
