import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForCourseComponent } from './request-for-course.component';

describe('RequestForCourseComponent', () => {
  let component: RequestForCourseComponent;
  let fixture: ComponentFixture<RequestForCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestForCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
