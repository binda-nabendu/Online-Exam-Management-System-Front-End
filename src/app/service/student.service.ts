import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../model/Course";
import {QuestionSummery} from "../model/QuestionSummery";
import {User} from "../model/User";
import {QuestionScript} from "../model/QuestionScript";
import {AnswerScript} from "../model/AnswerScript";

@Injectable({
  providedIn: 'root'
})



export class StudentService {
  constructor(private httpClient: HttpClient) { }
  private url: string = "https://oems-production-dec7.up.railway.app/api/";
  // private url: string = "http://localhost:8080/api/";
  token = localStorage.getItem('OEMSToken');



  getCard(){

    return this.httpClient.get(this.url+"student/board", {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  Courses(path: string) : Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.url+"student/"+path, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  examHistory(path: string) : Observable<QuestionSummery[]> {
    return this.httpClient.get<QuestionSummery[]>(this.url+"student/"+path, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  requestForCourses(listOfCourses: Course[]): Observable<Course[]> {
    return this.httpClient.post<Course[]>(this.url+"student/request-for-courses",listOfCourses, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  sendForReExamining(examId: number) {
    return this.httpClient.post(this.url+"student/exams/send-review/"+examId,'', {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }
  getUserInfo(id: string) : Observable<User> {
    return this.httpClient.get<User>(this.url+"student/exams/req-for-info", {
      headers: new HttpHeaders({Authorization: 'Bearer ' + this.token}),
      params: new HttpParams().set('id', id)});
  }

  getExamPaper(qid: number): Observable<QuestionScript> {
    return this.httpClient.get<QuestionScript>(this.url+"student/give-post-exam/"+qid, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }

  submitAns(ans: AnswerScript) {
    return this.httpClient.post(this.url+"student/give-post-exam/"+ans,'', {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }
}
