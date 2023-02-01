import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {regTec} from "../model/regTec";
import {course} from "../model/course";
import {regStd} from "../model/regStd";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor(private httpClient: HttpClient) { }
  private url: string = "http://localhost:8080/api/";
  token = localStorage.getItem('OEMSToken');
  getCard(){

    return this.httpClient.get(this.url+"teacher/board", {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }
  getAllTeacher(): Observable<regTec[]> {
    return this.httpClient.get<regTec[]>(this.url+"teacher/all-teachers", {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }
  getSpecificCoursesStudent(courseCode: String): Observable<regStd[]> {
    return this.httpClient.get<regStd[]>(this.url+"teacher/courses/my-students/" + courseCode, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }
  getAllStudents(): Observable<regStd[]> {
    return this.httpClient.get<regStd[]>(this.url+"teacher/all-students" , {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }
  getMyCourses(): Observable<course[]>{
    return this.httpClient.get<course[]>(this.url+"teacher/courses", {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }
}
