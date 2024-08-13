import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private _DataService:DataService){}
  mainData:any;
  facebook:string="";
  insta="";
  youtube="";
  twitter="";
  getMainData() {
    this._DataService.getMainData().subscribe({
      next: (res: any) => {
        this.mainData = res.data;
        this.facebook = res?.data[0]?.facebook || '';
        this.insta = res?.data[0]?.insta || '';
        this.youtube = res?.data[0]?.youtube || '';
        this.twitter = res?.data[0]?.twitter || '';


      },
      error: (err) => {
        console.log("Error", err);
        alert("errrrrrrr1")
      }
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMainData();
  }
}
