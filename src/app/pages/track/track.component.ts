import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent {
  eduRoutesData : any = {};
  eduCourse : any =[];
  id:string = '';
  daysNum :Number | undefined ;
  st_day:string='';
  end_day:string='';

  constructor(public _ActivatedRoute:ActivatedRoute, public _DataService:DataService)
  {
    this.id=this._ActivatedRoute.snapshot.params['id'];
    this._DataService.getEduRoutesDetails(this.id).subscribe((info)=>{
      this.eduRoutesData = info.data;
      this.eduCourse = this.eduRoutesData.items;
      for(let i of this.eduCourse)
      {
        this.st_day = i.st_day;
        this.end_day = i.end_day;
  
        let date1 :Date = new Date(this.st_day);
        let date2 :Date = new Date(this.end_day);
  
        let daysNumSec :any = date2.getTime()-date1.getTime();
  
         this.daysNum   = Math.floor(daysNumSec/(1000 * 60 * 60 * 24))   
  
      }

    
     })
  }
  handleClick(index: number) {
    console.log('Clicked on array index:', index);
    // Perform additional actions based on the clicked index
  }

}
