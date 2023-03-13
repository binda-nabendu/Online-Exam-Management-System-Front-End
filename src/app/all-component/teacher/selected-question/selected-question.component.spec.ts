import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedQuestionComponent } from './selected-question.component';

describe('SelectedQuestionComponent', () => {
  let component: SelectedQuestionComponent;
  let fixture: ComponentFixture<SelectedQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
