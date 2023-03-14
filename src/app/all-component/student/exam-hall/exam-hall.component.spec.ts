import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamHallComponent } from './exam-hall.component';

describe('ExamHallComponent', () => {
  let component: ExamHallComponent;
  let fixture: ComponentFixture<ExamHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamHallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
