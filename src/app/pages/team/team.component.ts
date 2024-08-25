import { Component } from '@angular/core';
import { serviceLog } from './team.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  teamData: any = [];
  constructor(private _dataService: DataService) {
    _dataService.getTeamData().subscribe((value) => {
      this.teamData = value.data;
      console.log(this.teamData);
    });
  }
}
