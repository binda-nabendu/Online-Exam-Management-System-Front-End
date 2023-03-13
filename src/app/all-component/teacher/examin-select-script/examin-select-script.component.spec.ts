import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminSelectScriptComponent } from './examin-select-script.component';

describe('ExaminSelectScriptComponent', () => {
  let component: ExaminSelectScriptComponent;
  let fixture: ComponentFixture<ExaminSelectScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaminSelectScriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExaminSelectScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
