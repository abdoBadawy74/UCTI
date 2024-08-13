import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JionUSasCompanyComponent } from './jion-usas-company.component';

describe('JionUSasCompanyComponent', () => {
  let component: JionUSasCompanyComponent;
  let fixture: ComponentFixture<JionUSasCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JionUSasCompanyComponent]
    });
    fixture = TestBed.createComponent(JionUSasCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
