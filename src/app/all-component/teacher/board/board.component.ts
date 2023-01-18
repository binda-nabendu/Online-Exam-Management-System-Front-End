import { Component } from '@angular/core';
import {AdminService} from "../../../service/admin.service";
import {TeacherService} from "../../../service/teacher.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  constructor(private service: TeacherService) {
  }
  ngOnInit(): void {
    this.service.getCard().subscribe(items =>{
      this.cardSet= new Map(Object.entries(items));
    });

  }
  cardSet: any;
}
