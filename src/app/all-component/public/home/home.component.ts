import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../../../../../Nabendu_info_Personal/src/assets/Font/fontawesome.css','./vendor/bootstrap/css/bootstrap.min.css'],
})
export class HomeComponent {
  constructor(private router: Router){

  }
  gofaq(){
    this.router.navigate(['app-faq']);
  }
}
