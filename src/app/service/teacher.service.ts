import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {regTec} from "../model/regTec";
import {Course} from "../model/Course";
import {regStd} from "../model/regStd";
import {QuestionSummery} from "../model/QuestionSummery";
import {QuestionScript} from "../model/QuestionScript";
import {AnswerScript} from "../model/AnswerScript";
import {StudentMark} from "../model/StudentMark";
import {Review} from "../model/Review";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor(private httpClient: HttpClient) { }
  private url: string = "https://oems-production-dec7.up.railway.app/api/";
  // private url: string = "http://localhost:8080/api/";
  token = localStorage.getItem('OEMSToken');
  getCard(){

    return this.httpClient.get(this.url+"teacher/board", {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }
  getAllTeacher(): Observable<regTec[]> {
    return this.httpClient.get<regTec[]>(this.url+"teacher/all-teachers", {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }
  getSpecificCoursesStudent(courseCode: String): Observable<regStd[]> {
    return this.httpClient.get<regStd[]>(this.url+"teacher/courses/my-students/" + courseCode, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }
  getAllStudents(): Observable<regStd[]> {
    return this.httpClient.get<regStd[]>(this.url+"teacher/all-students" , {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }
  getMyCourses(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(this.url+"teacher/courses", {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  allCourses() : Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.url+"teacher/all-courses", {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  myCourses() : Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.url+"teacher/courses", {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  setQuestion(jsonData: QuestionScript) {
    return this.httpClient.post(this.url+"teacher/create-exams/question",jsonData, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  getQuestionHeadDependOnLink(link: String) : Observable<QuestionSummery[]> {
    return this.httpClient.get<QuestionSummery[]>(this.url+link , {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }
  getQuestion(qId: number) : Observable<QuestionScript>{
    return this.httpClient.get<QuestionScript>(this.url+"teacher/see-questions/"+qId , {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  getStdList(examId: string): Observable<regStd[]>{
    return this.httpClient.get<regStd[]>(this.url+"teacher/all-pending-result/student-list/"+examId , {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  reqFroAnsScript(examId : number, stdId : string): Observable<AnswerScript>{
  return this.httpClient.get<AnswerScript>(this.url+"teacher/get-ans-script/"+examId+"/"+stdId , {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
}

  sendMark(stdMark: StudentMark) {
    return this.httpClient.post(this.url+"teacher/assign-mark-for-ans-script",JSON.stringify(stdMark), {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  assignableStudentOfThatCourse(examId: string):Observable<regStd[]> {
    return this.httpClient.get<regStd[]>(this.url+"teacher/assign-cgpa/"+examId , {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  assignCgpa() {


  }

  reviewList(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(this.url+"teacher/receive-review", {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }
}
