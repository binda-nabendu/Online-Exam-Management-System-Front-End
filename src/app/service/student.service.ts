import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {regTec} from "../model/regTec";

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
  getAllStudent(courseCode: String): Observable<regTec[]> {
    return this.httpClient.get<regTec[]>(this.url+"teacher/courses/my-students/" + courseCode + "/student", {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }
}
