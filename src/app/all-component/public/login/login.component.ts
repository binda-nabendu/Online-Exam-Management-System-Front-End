import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../../../../Material-Module";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule,MaterialModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor() {
  }
  ngOnInit(): void {
  }

}
