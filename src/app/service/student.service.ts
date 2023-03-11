import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {regTec} from "../model/regTec";
import {Course} from "../model/Course";
import {QuestionSummery} from "../model/QuestionSummery";

@Injectable({
  providedIn: 'root'
})



export class StudentService {
  constructor(private httpClient: HttpClient) { }
  private url: string = "http://localhost:8080/api/";
  token = localStorage.getItem('OEMSToken');



  getCard(){

    return this.httpClient.get(this.url+"student/board", {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }

  Courses(path: string) : Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.url+"student/"+path, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }

  ExamHistory(path: string) : Observable<QuestionSummery[]> {
    return this.httpClient.get<QuestionSummery[]>(this.url+"student/"+path, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }
}
