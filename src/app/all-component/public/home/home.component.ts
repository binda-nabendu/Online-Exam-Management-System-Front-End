import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  constructor(private router: Router){

  }
  gofaq(){
    this.router.navigate(['app-faq']);
  }

  ngOnInit(): void {
    this.router.navigate(['public-dashboard/home']).then();
  }
}
