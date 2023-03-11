import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {regTec} from "../model/regTec";
import {Course} from "../model/Course";
import {regStd} from "../model/regStd";
import {QuestionSummery} from "../model/QuestionSummery";
import {QuestionScript} from "../model/QuestionScript";

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
  getMyCourses(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(this.url+"teacher/courses", {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }

  allCourses() : Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.url+"teacher/all-courses", {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }

  myCourses() : Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.url+"teacher/courses", {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }

  setQuestion(jsonData: string) {
    return this.httpClient.post(this.url+"teacher/create-exams/question",jsonData, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }

  getMyQuestionList() : Observable<QuestionSummery[]> {
    return this.httpClient.get<QuestionSummery[]>(this.url+"teacher/all-questions" , {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }
  getQuestion(qId: string) : Observable<QuestionScript>{
    return this.httpClient.get<QuestionScript>(this.url+"teacher/see-questions/"+qId , {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }
}
