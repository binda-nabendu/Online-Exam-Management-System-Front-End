import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingStudentComponent } from './pending-student.component';

describe('PendingStudentComponent', () => {
  let component: PendingStudentComponent;
  let fixture: ComponentFixture<PendingStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
