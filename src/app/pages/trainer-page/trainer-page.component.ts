import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css'],
})
export class TrainerPageComponent {
  trainers: any = [];
  id: string = '';

  constructor(
    public _ActivatedRoute: ActivatedRoute,
    public _DataService: DataService
  ) {
    this._DataService.getTrainersData().subscribe((info) => {
      this.trainers = info.data;
      console.log(info);
    });
  }
}
