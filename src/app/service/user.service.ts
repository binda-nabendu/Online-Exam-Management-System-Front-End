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
  submitTecReg(teacher: any){
    let formData: FormData = new FormData();
    formData.append('nid', teacher.nid);
    formData.append('userName', teacher.userName);
    formData.append('fatherName', teacher.fatherName);
    formData.append('motherName', teacher.motherName);
    formData.append('gender', teacher.gender);
    formData.append('contactNo', teacher.contactNo);
    formData.append('email', teacher.email);
    formData.append('dob', teacher.dob);
    formData.append('address', teacher.address);
    formData.append('password', teacher.password);
    formData.append('eduQualification', teacher.eduQualification);
    formData.append('expertise', teacher.expertise);
    return this.httpClient.post(this.url+"public/request-to-join-as-teacher", formData);
  }
}
