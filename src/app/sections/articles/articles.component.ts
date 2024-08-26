import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent {
  NewsData: any = [];

  constructor(public data: DataService) {
    data.getNewsData().subscribe((value) => {
      this.NewsData = value.data;

      this.NewsData.forEach((item: any) => {
        const dateToSubtract = new Date(item.date);
        const currentDate = new Date();

        const differenceInMilliseconds =
          currentDate.getTime() - dateToSubtract.getTime();
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const differenceInDays = Math.floor(
          differenceInMilliseconds / millisecondsPerDay
        );

        item.days = differenceInDays; // Assign the number of days to each article
      });

      console.log(this.NewsData); // Log to check the data
    });
  }
}
