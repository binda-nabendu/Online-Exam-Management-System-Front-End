import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPaperWithAnsScriptComponent } from './question-paper-with-ans-script.component';

describe('QuestionPaperWithAnsScriptComponent', () => {
  let component: QuestionPaperWithAnsScriptComponent;
  let fixture: ComponentFixture<QuestionPaperWithAnsScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionPaperWithAnsScriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionPaperWithAnsScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
