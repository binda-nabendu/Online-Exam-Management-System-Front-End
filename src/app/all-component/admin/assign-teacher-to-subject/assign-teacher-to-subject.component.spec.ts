import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTeacherToSubjectComponent } from './assign-teacher-to-subject.component';

describe('AssignTeacherToSubjectComponent', () => {
  let component: AssignTeacherToSubjectComponent;
  let fixture: ComponentFixture<AssignTeacherToSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignTeacherToSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignTeacherToSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
