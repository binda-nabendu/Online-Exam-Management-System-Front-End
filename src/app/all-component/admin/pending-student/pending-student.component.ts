import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../service/admin.service";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../popup/popup.component";
import {regStd} from "../../../model/regStd";

@Component({
  selector: 'app-pending-student',
  templateUrl: './pending-student.component.html',
  styleUrls: ['./pending-student.component.css']
})
export class PendingStudentComponent implements OnInit{
  constructor(private tecService: TeacherService, private admService: AdminService, private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.getAllPendingStudents();
  }
  // displayedColumnName: string[] = ['nid', 'Name', 'Father', 'Mother','Phone', 'Email', 'Address', 'DEPT', 'Requested Semester', 'DOB', 'Action'];
  // displayedColumns: string[] = ['nid', 'userName', 'fatherName', 'motherName', 'contactNo', 'email', 'address', 'deptId', 'semester', 'dob', 'gender'];
  displayedColumnName: string[] = ['Name', 'Father', 'Mother','Phone', 'Email', 'Action'];
  displayedColumns: string[] = ['userName', 'fatherName', 'motherName', 'contactNo', 'email', 'gender'];
  dataSource:any;
  isemp = false;
  getAllPendingStudents(){
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

  FunctionUpdate(user: regStd) {
    this.dialog.open(PopupComponent,{
        width: '400px',
        height: '400px',
        exitAnimationDuration: '500ms',
        enterAnimationDuration:'500ms',
      data:{
          student: user,
      }
    })
  }
}
