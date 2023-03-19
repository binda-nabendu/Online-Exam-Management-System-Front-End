import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {StudentService} from "../../../service/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-exam-hall',
  templateUrl: './exam-hall.component.html',
  styleUrls: ['./exam-hall.component.css']
})
export class ExamHallComponent implements OnDestroy, OnInit{
  constructor(private stdService: StudentService,private router : Router) {
    this.differenceDays = 0;
    this.differenceHours = 0;
    this.differenceMinute = 0;
    this.differenceSecond = 0;
  }
  ngOnInit() {
    this.stdService.examHistory("exams/immediate-upcoming").subscribe(getDate=>{
      let dateString;

      if(getDate.length > 0){
        dateString = getDate[0].startingDateTime;
      }else{
        // dateString = "0000 0 0 00:00:00";
        dateString = "2024 3 14 18:39:00";//for check
      }
      const dateParts = dateString.split(' ');
      const year = Number(dateParts[0]);
      const month = Number(dateParts[1]) - 1; // Months are zero-indexed in JavaScript, so we need to subtract 1
      const day = Number(dateParts[2]);
      const hours = Number(dateParts[3].split(':')[0]);
      const minutes = Number(dateParts[3].split(':')[1]);
      const seconds = Number(dateParts[3].split(':')[2]);

      this.targetDate = new Date(year, month, day, hours, minutes, seconds);
    });
  }
  date: any;
  now: any;
  targetDate: any;
  differenceDays: number;
  differenceHours: number;
  differenceMinute: number;
  differenceSecond: number;

  intervalId: any;

  @ViewChild("days", { static: true }) days!: ElementRef<HTMLDivElement>;
  @ViewChild("hours", { static: true }) hours!: ElementRef<HTMLDivElement>;
  @ViewChild("minutes", { static: true }) minutes!: ElementRef<HTMLDivElement>;
  @ViewChild("seconds", { static: true }) seconds!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.intervalId = setInterval(() => {
      this.tickTick();
      const remainingTime = new Date(this.targetDate).getTime() - new Date().getTime();
      // console.log(this.targetDate);
      if (remainingTime < 0) {
        this.differenceDays = 0;
        this.differenceHours = 0;
        this.differenceMinute = 0;
        this.differenceSecond = 0;
        this.router.navigate(["student/student-dashboard/get-question-paper-with-ans-script"]).then();
        return;
      }
      this.differenceDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      this.differenceHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.differenceMinute = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      this.differenceSecond = Math.floor((remainingTime % (1000 * 60)) / 1000);

      !isNaN(Number(this.days.nativeElement.innerText))
        ? (this.days.nativeElement.innerText = String(Math.floor(this.differenceDays)))
        : (this.days.nativeElement.innerHTML = '<img src="https://i.gifer.com/VAyR.gif" alt="nabendu"/>');
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  tickTick() {
    this.date = new Date();
    this.now = this.date.getTime();
    this.days.nativeElement.innerText = String(this.differenceDays);
    this.hours.nativeElement.innerText = String(this.differenceHours);
    this.minutes.nativeElement.innerText = String(this.differenceMinute);
    this.seconds.nativeElement.innerText = String(this.differenceSecond);
  }

  navigateDemo() {
    this.router.navigate(["student/student-dashboard/get-question-paper-with-ans-script"]).then();
  }
}
