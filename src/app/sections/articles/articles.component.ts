import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent {
  NewsData: any = [];
  days!: number;
  //  Hours!:number;
  //  newsDataIndex!:number;
  constructor(public data: DataService) {
    data.getNewsData().subscribe((value) => {
      this.NewsData = value.data;

      for (let item of this.NewsData) {
        let time = new Date(item.date);

        let dateString = item.date;

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

        // let month = time.getMonth() + 1;
        // let day = date.getDate();
        // let year = date.getFullYear();

        // let formattedDate = ${month}/${day}/${year};

        // let date = new Date();

        // let month = date.getMonth() + 1;
        // let day = date.getDate();
        // let year = date.getFullYear();

        // let formattedDate = ${month}/${day}/${year};
      }
    });
  }
}
