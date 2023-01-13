import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-tnc',
  templateUrl: './tnc.component.html',
  styleUrls: ['./tnc.component.css']
})
export class TncComponent implements OnInit {
  constructor(private service: UserService) {
  }

  f: any;

  ngOnInit(): void {

    this.service.getFaq().subscribe(t => {
      this.f = t;
      console.log(t);
    })
  }
}
