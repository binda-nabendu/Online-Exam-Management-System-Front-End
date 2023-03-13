import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCgpaComponent } from './assign-cgpa.component';

describe('AssignCgpaComponent', () => {
  let component: AssignCgpaComponent;
  let fixture: ComponentFixture<AssignCgpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignCgpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignCgpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
