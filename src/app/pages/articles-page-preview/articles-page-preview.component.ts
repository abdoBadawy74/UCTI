import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles-page-preview',
  templateUrl: './articles-page-preview.component.html',
  styleUrls: ['./articles-page-preview.component.css'],
})
export class ArticlesPagePreviewComponent implements OnInit, OnDestroy {
  id: string = '';
  articles: any = {
    description: '', // Initialize description to prevent undefined errors
  };
  moreArticles: any[] = []; // Initialize as an array
  days!: number;
  private routeSub!: Subscription; // Subscription for route parameters

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _DataService: DataService,
    private sanitizer: DomSanitizer // Inject DomSanitizer
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.routeSub = this._ActivatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.loadArticleDetails(this.id);
    });
  }

  /**
   * Fetches and processes article details based on the provided ID.
   * @param id The ID of the article to fetch.
   */
  loadArticleDetails(id: string): void {
    // Fetch article details from the data service
    this._DataService.getNewsDetials(id).subscribe((response) => {
      // Assign the main article data
      this.articles = response.data;

      // Sanitize the description HTML
      this.articles.description = this.sanitizeHtml(this.articles.description);

      // Assign the more articles data
      this.moreArticles = response['More Articles'] || []; // Ensure it's an array
      console.log(this.moreArticles);

      // Calculate the number of days since the article's date
      const articleDate = new Date(this.articles.date);
      const currentDate = new Date();
      const differenceInMilliseconds =
        currentDate.getTime() - articleDate.getTime();
      const millisecondsPerDay = 1000 * 60 * 60 * 24;
      this.days = Math.floor(differenceInMilliseconds / millisecondsPerDay);
    });
  }

  /**
   * Sanitizes HTML content to prevent security risks.
   * @param html The HTML string to sanitize.
   * @returns A sanitized version of the HTML.
   */
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  /**
   * Lifecycle hook that is called when the component is destroyed.
   * Used here to unsubscribe from observables to prevent memory leaks.
   */
  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
