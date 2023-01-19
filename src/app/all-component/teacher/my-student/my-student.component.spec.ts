import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStudentComponent } from './my-student.component';

describe('MyStudentComponent', () => {
  let component: MyStudentComponent;
  let fixture: ComponentFixture<MyStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
