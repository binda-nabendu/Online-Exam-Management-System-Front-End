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
  questionAns:any;
  ngOnInit(): void {

    this.service.getFaq().subscribe(t=>{
      this.questionAns = new Map(Object.entries(t));
      console.log(this.questionAns);
    })
  }
}
