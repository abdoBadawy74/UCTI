import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOpinionComponent } from './student-opinion.component';

describe('StudentOpinionComponent', () => {
  let component: StudentOpinionComponent;
  let fixture: ComponentFixture<StudentOpinionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentOpinionComponent]
    });
    fixture = TestBed.createComponent(StudentOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
