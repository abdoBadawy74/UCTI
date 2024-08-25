import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-articles-page-preview',
  templateUrl: './articles-page-preview.component.html',
  styleUrls: ['./articles-page-preview.component.css'],
})
export class ArticlesPagePreviewComponent implements OnInit {
  id: string = '';
  articles: any = {
    description: '', // Add description here to prevent undefined errors
  };
  moreArticles: any = {};
  days!: number;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _DataService: DataService,
    private sanitizer: DomSanitizer // Inject DomSanitizer
  ) {}

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._DataService.getNewsDetials(this.id).subscribe((response) => {
      this.articles = response.data;

      // Sanitize the description HTML
      this.articles.description = this.sanitizeHtml(this.articles.description);

      this.moreArticles = response['More Articles'];

      let time = new Date(this.articles.date);

      let dateString = time;

      // Convert the date string to a Date object
      var dateToSubtract = new Date(dateString);

      // Get the current date
      var currentDate = new Date();

      // Calculate the difference in milliseconds
      var difference = currentDate.getTime() - dateToSubtract.getTime();

      // Convert milliseconds difference to days
      var millisecondsPerDay = 1000 * 60 * 60 * 24;
      var differenceInDays = Math.floor(difference / millisecondsPerDay);

      this.days = differenceInDays;
    });
  }

  // Method to sanitize HTML
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
