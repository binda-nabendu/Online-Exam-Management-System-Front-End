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
}
