import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReExamingScriptComponent } from './re-examing-script.component';

describe('ReExamingScriptComponent', () => {
  let component: ReExamingScriptComponent;
  let fixture: ComponentFixture<ReExamingScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReExamingScriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReExamingScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
