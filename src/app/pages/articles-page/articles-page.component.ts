import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent {
  NewsData:any =[] ;
  term :string = '';
  days!:number

  constructor(public data:DataService) {
   data.getNewsData().subscribe((value)=>{
    this.NewsData = value.data;
    console.log(this.NewsData);

for(let item of this.NewsData)
{
  let time = new Date(item.date);
  console.log(time);
  let dateString =item.date;

// Convert the date string to a Date object
var dateToSubtract = new Date(dateString);

// Get the current date
var currentDate = new Date();

// Calculate the difference in milliseconds
var difference = currentDate.getTime() - dateToSubtract.getTime();

// Convert milliseconds difference to days
var millisecondsPerDay = 1000 * 60 * 60 * 24;
var differenceInDays = Math.floor(difference / millisecondsPerDay);

console.log("Difference in days:", differenceInDays)
this.days = differenceInDays;
}


   })

}
}
