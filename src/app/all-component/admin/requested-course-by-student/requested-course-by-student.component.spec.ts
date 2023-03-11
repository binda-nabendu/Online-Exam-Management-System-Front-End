import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedCourseByStudentComponent } from './requested-course-by-student.component';

describe('RequestedCourseByStudentComponent', () => {
  let component: RequestedCourseByStudentComponent;
  let fixture: ComponentFixture<RequestedCourseByStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedCourseByStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestedCourseByStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
