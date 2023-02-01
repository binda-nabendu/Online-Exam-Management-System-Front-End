import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../service/admin.service";

@Component({
  selector: 'app-pending-student',
  templateUrl: './pending-student.component.html',
  styleUrls: ['./pending-student.component.css']
})
export class PendingStudentComponent implements OnInit{
  constructor(private tecService: TeacherService, private admService: AdminService) {
  }
  ngOnInit(): void {
    this.getAllStudents();
  }
  displayedColumnName: string[] = ['nid', 'Name', 'Father', 'Mother','Phone', 'Email', 'Address', 'DEPT', 'Requested Semester', 'DOB'];
  displayedColumns: string[] = ['nid', 'userName', 'fatherName', 'motherName', 'contactNo', 'email', 'address', 'deptId', 'semester', 'dob'];
  dataSource:any;
  isemp = false;
  getAllStudents(){
    this.admService.getPendingStudents().subscribe(student =>{
      this.dataSource = student;
      console.log(student);
      if(this.dataSource.length <= 0){
        this.isemp = false;

      }else this.isemp = true;
    })
  }
  updateForm = new FormGroup({
    crs: new FormControl("", Validators.required),
  })

}
