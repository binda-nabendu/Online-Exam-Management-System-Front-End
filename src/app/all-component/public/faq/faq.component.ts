import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit{
  constructor(private service: UserService) {
  }
  f:any;
  ngOnInit(): void {

    this.service.getFaq().subscribe(t=>{
      console.log(t)
    })
  }
}
