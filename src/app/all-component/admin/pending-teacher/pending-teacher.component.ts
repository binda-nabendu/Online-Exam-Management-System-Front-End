import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {AdminService} from "../../../service/admin.service";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PopupComponent} from "../popup/popup.component";
import {regTec} from "../../../model/regTec";

@Component({
  selector: 'app-pending-teacher',
  templateUrl: './pending-teacher.component.html',
  styleUrls: ['./pending-teacher.component.css']
})
export class PendingTeacherComponent implements OnInit{
  constructor(private tecService: TeacherService, private admService: AdminService, private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.getAllPendingTeachers();
  }
  displayedColumnName: string[] = ['Name', 'Father', 'Mother','Phone', 'Educational Qualification','Expert', 'Email', 'Action'];
  displayedColumns: string[] = ['userName', 'fatherName', 'motherName', 'contactNo', 'eduQualification','expertise', 'email', 'gender'];
  dataSource:any;
  isemp = false;
  getAllPendingTeachers(){
    this.admService.getPendingTeachers().subscribe(student =>{
      this.dataSource = student;
      console.log(student);
      if(this.dataSource.length <= 0){
        this.isemp = false;

      }else this.isemp = true;
    })
  }
  FunctionUpdate(teacher: regTec) {
    this.dialog.open(PopupComponent,{
      width: '400px',
      height: '400px',
      exitAnimationDuration: '500ms',
      enterAnimationDuration:'500ms',
      data:{
        userDetails:teacher,
      }
    })
  }
}
