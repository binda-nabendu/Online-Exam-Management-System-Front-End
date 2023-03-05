import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {regStd} from "../model/regStd";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }
  private url: string = "http://localhost:8080/api/";
  token = localStorage.getItem('OEMSToken');
  getCard(){

    return this.httpClient.get(this.url+"admin/board", {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }
  getPendingStudents(): Observable<regStd[]> {
    return this.httpClient.get<regStd[]>(this.url+"admin/approve-student/list" , {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }

  getPendingTeachers() {
    return this.httpClient.get<regStd[]>(this.url+"admin/approve-teachers/list" , {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }

  addStudent(nid: any) {
    return this.httpClient.post(this.url+"admin/approve-student/approve/"+nid,null, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }

  removeStudent(nid: any) {
    return this.httpClient.post(this.url+"admin/approve-student/delete/"+nid,null, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }
  addTeacher(nid: any) {
    return this.httpClient.post(this.url+"admin/approve-teachers/approve/"+nid,null, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }

  removeTeacher(nid: any) {
    return this.httpClient.post(this.url+"admin/approve-teachers/delete/"+nid,null, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token || ""})});
  }
}
