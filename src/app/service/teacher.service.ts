import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor(private httpClient: HttpClient) { }
  private url: string = "http://localhost:8080/api/";
  getCard(){
    let token = localStorage.getItem('OEMSToken');
    return this.httpClient.get(this.url+"teacher/board", {headers: new HttpHeaders({Authorization: 'Bearer ' + token || ""})});
  }
}
