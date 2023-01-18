import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {regStd} from "../model/regStd";
import {regTec} from "../model/regTec";
import {regPerson} from "../model/regPerson";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  private url: string = "http://localhost:8080/api/";
  proceedLogin(user:any){
     return this.httpClient.post(this.url+"authenticate",user);
  }
  GetToken() {
    return localStorage.getItem('token') != null ? localStorage.getItem('OEMSToken') : '';
  }
  IsLoggedIn(){
    return localStorage.getItem('OEMSToken') != null;
  }
  GetRole()  {

    // this will need for fix buffer error
    (window as any).global = window;
    // @ts-ignore
    window.Buffer = window.Buffer || require('buffer').Buffer;
    //____________________*********___________________


    let token = localStorage.getItem('OEMSToken');
    if(token != null){
      let getRolesFromPayload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()).role;
      let allRoles = new Map(Object.entries(getRolesFromPayload));
      let v =allRoles.get('0');
      // @ts-ignore
      allRoles = new Map(Object.entries(v));
      return  allRoles.get('authority');
    }else return "public";
  }
  LoggedOut(){
    localStorage.clear();
  }
  buildFormDataComn(person: regPerson): FormData{
    let formData: FormData = new FormData();
    formData.append('nid', person.nid);
    formData.append('userName', person.userName);
    formData.append('fatherName', person.fatherName);
    formData.append('motherName', person.motherName);
    formData.append('gender', person.gender);
    formData.append('contactNo', person.contactNo);
    formData.append('email', person.email);
    formData.append('dob', person.dob);
    formData.append('address', person.address);
    formData.append('password', person.password);
    return formData;
  }
  submitStdReg(student: regStd){
    let formData: FormData = this.buildFormDataComn(student);
    formData.append('deptId', student.deptId);
    formData.append('semester', student.semester);
    return this.httpClient.post(this.url+"public/request-to-join-as-student", formData);
  }
  submitTecReg(teacher: any){
    let formData: FormData = this.buildFormDataComn(teacher)
    formData.append('eduQualification', teacher.eduQualification);
    formData.append('expertise', teacher.expertise);
    return this.httpClient.post(this.url+"public/request-to-join-as-teacher", formData);
  }

  getTnC() {
    return this.httpClient.get(this.url+"public/terms-and-condition");
  }
  getFaq(){
    return this.httpClient.get(this.url+"public/faq");
  }
}
