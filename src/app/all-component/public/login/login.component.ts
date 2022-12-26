import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../../../../Material-Module";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [CommonModule,MaterialModule,FormsModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor() {
  }
  ngOnInit(): void {
  }
  checkValidate(userDetails:any){

  }
  goToRegPage(){

  }
}
