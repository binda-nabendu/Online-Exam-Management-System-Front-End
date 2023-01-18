import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../service/admin.service";
import {StudentService} from "../../../service/student.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{
  constructor(private service: StudentService) {
  }
  ngOnInit(): void {
    this.service.getCard().subscribe(items =>{
      this.cardSet= new Map(Object.entries(items));
    });

  }
  cardSet: any;
}
