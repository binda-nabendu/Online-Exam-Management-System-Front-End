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

  ngOnInit(): void {

    this.service.getTnC().subscribe(t => {
      const map = new Map(Object.entries(t));
      this.Introduction = map.get("introduction");
      this.AccessAndUseOfTheWebsite = map.get("accessAndUseOfTheWebsite");
      this.Privacy = map.get("privacy");
      this.Instructor = map.get("instructor");
      this.star = map.get("star");
    });
  }
  Introduction:any;
  AccessAndUseOfTheWebsite:any;
  Privacy:any;
  Instructor:any;
  star:any;
}
