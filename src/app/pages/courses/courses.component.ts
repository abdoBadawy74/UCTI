import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

import { ActivatedRoute } from '@angular/router';
declare var google: any; // Declare google variable

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  currentSection: string = 'section1'; // Default section
  currentTab: string = 'section1'; // Default tab
  CourseData :any = [];
  id:string = '';
  daysNum :Number | undefined ;
  lat:any;
  long:any;
  mapUrl:string='';
  st_day:string='';
  end_day:string='';
  extractedTime:string |undefined;
  dateTimeString:any|undefined;
  timeOfDay: string |undefined;
  map: any;

    
  ngOnInit(): void {
  }
  display : any;
  center: google.maps.LatLngLiteral = {lat :0, lng:0 };
  zoom = 4;
  

  constructor(public _ActivatedRoute:ActivatedRoute, public _DataService:DataService)
  {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._DataService.getCourseDetails(this.id).subscribe((info)=>{

      this.CourseData = info.data;
            
      this. dateTimeString  = this.CourseData.date;

      this.st_day = this.CourseData.st_day;
      this.end_day = this.CourseData.end_day;

      
      let date1 :Date = new Date(this.st_day);
      let date2 :Date = new Date(this.end_day);

      let daysNumSec :any = date2.getTime()-date1.getTime();

      this.daysNum   = Math.floor(daysNumSec/(1000 * 60 * 60 * 24))   

      this.lat = this.CourseData.lat;
      let latNum: number = Number(this.lat);
      this.long = this.CourseData.long;
      let longNum: number = Number(this.long);
      this.center = {lat :latNum, lng :longNum };
      this.extractTime();
    })
  }

  extractTime() {
    // Step 1: Parse the date-time string into a Date object
    let dateTimeObject = new Date(this.dateTimeString);
    // Step 2: Extract hours, minutes, and seconds
    let hours = dateTimeObject.getHours().toString().padStart(2, '0');
    let minutes = dateTimeObject.getMinutes().toString().padStart(2, '0');
    let seconds = dateTimeObject.getSeconds().toString().padStart(2, '0');

    // Step 3: Construct the time string (HH:mm:ss)
    this.extractedTime = `${hours}:${minutes}:${seconds}`;
    const hoursNumber = parseInt(hours)

    if ( hoursNumber >= 0 && hoursNumber < 12) {
      this.timeOfDay = 'صباحاّ';
    } else {
      this.timeOfDay = 'مساءّ';
    }
  }
 

  moveMap(event: google.maps.MapMouseEvent) {
    if(event.latLng!= null)
    this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.display = event.latLng.toJSON();
  }


  

  navigateToSection(section: string) {
    this.currentSection = section;
  }
  setCurrentTab(section: string) {
    this.currentTab = section;
  }
}
