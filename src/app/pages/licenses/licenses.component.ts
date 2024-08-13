import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.component.html',
  styleUrls: ['./licenses.component.css']
})
export class LicensesComponent {
  VerData : any=[]
  constructor(_dataService:DataService) {
    _dataService.getValidation().subscribe((res)=>{
      this.VerData = res.data
    })
  }

}
