import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {regStd} from "../model/regStd";
import {regTec} from "../model/regTec";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  private url: string = "http://localhost:8080/api/";
  proceedLogin(user:any){
     return this.httpClient.post(this.url+"authenticate",user);
  }
  getFaq(){
    return this.httpClient.get(this.url+"public/faq");
  }
  submitStdReg(student: regStd){
    return this.httpClient.post(this.url+"public/request-to-join-as-student", student);
  }
  submitTecReg(teacher: regTec){
    return this.httpClient.post(this.url+"public/request-to-join-as-teacher", teacher);
  }
}
