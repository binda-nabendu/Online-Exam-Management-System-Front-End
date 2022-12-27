import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationTeacherComponent } from './registration-teacher.component';

describe('RegistrationTeacherComponent', () => {
  let component: RegistrationTeacherComponent;
  let fixture: ComponentFixture<RegistrationTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
