import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {regTec} from "../model/regTec";

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
}
