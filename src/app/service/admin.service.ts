import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {regStd} from "../model/regStd";
import {Department} from "../model/Department";
import {Course} from "../model/Course";
import {RequestedCourses} from "../model/RequestedCourses";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }
  private url: string = "https://oems-production-dec7.up.railway.app/api/";
  // private url: string = "http://localhost:8080/api/";
  token = localStorage.getItem('OEMSToken');
  getCard(){

    return this.httpClient.get(this.url+"admin/board", {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }
  getPendingStudents(): Observable<regStd[]> {
    return this.httpClient.get<regStd[]>(this.url+"admin/approve-student/list" , {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  getPendingTeachers() {
    return this.httpClient.get<regStd[]>(this.url+"admin/approve-teachers/list" , {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  addStudent(nid: any) {
    return this.httpClient.post(this.url+"admin/approve-student/approve/"+nid,null, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  removeStudent(nid: any) {
    return this.httpClient.post(this.url+"admin/approve-student/delete/"+nid,null, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }
  addTeacher(nid: any) {
    return this.httpClient.post(this.url+"admin/approve-teachers/approve/"+nid,null, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  removeTeacher(nid: any) {
    return this.httpClient.post(this.url+"admin/approve-teachers/delete/"+nid,null, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  createDept(dept: Department) {
    let formData: FormData = new FormData();
    formData.append('deptId', dept.deptId);
    formData.append('deptName', dept.deptName);
    this.httpClient.post(this.url+"admin/add-department/",formData, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  createCourse(crs: Course) {
    let formData: FormData = new FormData();
    formData.append('courseCode', crs.courseCode);
    formData.append('courseName', crs.courseName);
    formData.append('deptId', crs.deptId);
    this.httpClient.post(this.url+"admin/add-courses/",formData, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  changeSem(formData: FormData){
    return this.httpClient.post(this.url+"admin/action/changeSemester",formData, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  assignTecToCourse(formData: FormData) {
    return this.httpClient.post(this.url+"admin/course/assign-teacher",formData, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  stdReqCrs(): Observable<RequestedCourses[]> {
    return this.httpClient.get<RequestedCourses[]>(this.url+"admin/requested-courses" , {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }
  approveReqCourse(reqCrs : RequestedCourses) : boolean {
    this.httpClient.post(this.url+"admin/requested-courses/approve",JSON.stringify(reqCrs), {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
    return true;
  }
  deleteReqCourse(reqCrs : RequestedCourses): boolean {
    this.httpClient.post(this.url+"admin/requested-courses/delete",JSON.stringify(reqCrs), {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
    return true;
  }
}
