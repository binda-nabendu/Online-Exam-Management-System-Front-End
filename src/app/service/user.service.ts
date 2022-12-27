import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  private url: string = "http://localhost:8080/";
  proceedLogin(user:any){
     return this.httpClient.post(this.url+"authenticate",user);
  }
}
