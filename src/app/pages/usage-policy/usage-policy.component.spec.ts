import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsagePolicyComponent } from './usage-policy.component';

describe('UsagePolicyComponent', () => {
  let component: UsagePolicyComponent;
  let fixture: ComponentFixture<UsagePolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsagePolicyComponent]
    });
    fixture = TestBed.createComponent(UsagePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
