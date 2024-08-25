import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
DataService

@Component({
  selector: 'app-articles-page-preview',
  templateUrl: './articles-page-preview.component.html',
  styleUrls: ['./articles-page-preview.component.css']
})
export class ArticlesPagePreviewComponent implements OnInit {

  id :string = "";
  articles :any = {};
  moreArticles:any ={}
  days!:number
  constructor(private _ActivatedRoute:ActivatedRoute,private _DataService:DataService) {


  }
  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id']
    this._DataService.getNewsDetials(this.id).subscribe((response)=> {
      this.articles = response.data;


      this.moreArticles = response["More Articles"]
      let time = new Date(this.articles.date);
      console.log(this.articles.date);

console.log(this.moreArticles);

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

    })

  }


}
