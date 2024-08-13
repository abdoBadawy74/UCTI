import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent {
  currentSection: string = 'section1'; // Default section
  currentTab: string = 'section1'; // Default tab
  trainersData :any = [];
  id:string = '';
  daysNum :Number | undefined ;
  st_day:string='';
  end_day:string='';

  constructor (public _ActivatedRoute:ActivatedRoute, public _DataService:DataService){
    this.id=this._ActivatedRoute.snapshot.params['id'];

    this._DataService.getTrainerDetails(this.id).subscribe((info)=>{
      this.trainersData = info.data; 
      console.log(this.trainersData)
      for(let i of this.trainersData.items)
        {
         

          this.st_day = i.st_day;
          this.end_day = i.end_day;
    
          let date1 :Date = new Date(this.st_day);
          let date2 :Date = new Date(this.end_day);
    
          let daysNumSec :any = date2.getTime()-date1.getTime();
    
          this.daysNum   = Math.floor(daysNumSec/(1000 * 60 * 60 * 24))   
    
        }
    })

   
  };


  navigateToSection(section: string) {
    this.currentSection = section;
  }
  setCurrentTab(section: string) {
    this.currentTab = section;
  }



}


