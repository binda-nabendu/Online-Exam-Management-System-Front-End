import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamineAnsScriptComponent } from './examine-ans-script.component';

describe('ExamineAnsScriptComponent', () => {
  let component: ExamineAnsScriptComponent;
  let fixture: ComponentFixture<ExamineAnsScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamineAnsScriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamineAnsScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
