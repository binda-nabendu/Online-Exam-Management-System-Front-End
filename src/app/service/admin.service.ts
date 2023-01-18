import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }
  private url: string = "http://localhost:8080/api/";
  getCard(){
    let token = localStorage.getItem('OEMSToken');
    return this.httpClient.get(this.url+"admin/board", {headers: new HttpHeaders({Authorization: 'Bearer ' + token || ""})});
  }
}
