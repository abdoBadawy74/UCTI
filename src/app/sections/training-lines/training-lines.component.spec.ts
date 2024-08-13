import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLinesComponent } from './training-lines.component';

describe('TrainingLinesComponent', () => {
  let component: TrainingLinesComponent;
  let fixture: ComponentFixture<TrainingLinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingLinesComponent]
    });
    fixture = TestBed.createComponent(TrainingLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
