import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesPagePreviewComponent } from './articles-page-preview.component';

describe('ArticlesPagePreviewComponent', () => {
  let component: ArticlesPagePreviewComponent;
  let fixture: ComponentFixture<ArticlesPagePreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlesPagePreviewComponent]
    });
    fixture = TestBed.createComponent(ArticlesPagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
