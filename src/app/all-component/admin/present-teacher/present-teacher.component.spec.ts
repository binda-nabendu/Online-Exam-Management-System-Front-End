import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentTeacherComponent } from './present-teacher.component';

describe('PresentTeacherComponent', () => {
  let component: PresentTeacherComponent;
  let fixture: ComponentFixture<PresentTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
