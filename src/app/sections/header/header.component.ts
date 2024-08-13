import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

export interface Goal {
  goals: string[];
}

export interface Service {
  services: any[];
}

export interface Trainer {
  trainers: any[];
}

export interface Item {
  items: any[];
}

export interface EduRoute extends Goal, Service, Trainer, Item {
  eid: string;
  title: string;
  description: string;
  image: string;
  outputs: string | null;
  date: string;
}

export interface Data {
  goals: any[];
  services: any[];
  trainers: any[];
  eduroute: EduRoute[];
  news: any[];
  name: string;
  description: string;
  about_us: string;
  logo: string;
  contact_no: number;
  view: string;
  message: string;
  tax_registration_number: number;
  commercial_registration_number: number;
  facebook: string;
  insta: string;
  youtube: string;
  twitter: string;
  hero: string;
  hero_title: string;
  hero_details: string;
}

export interface ApiResponse {
  status: string;
  code: number;
  data: Data[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fadeInHeader', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('3s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private _DataService: DataService) {}
  mainData: any;
  hero_title: string = "";
  firstWord: string = '';
  middleText: string = '';
  lastTwoWords: string = '';
  hero_details:string="";
  hero="";
  facebook:string="";
  insta="";
  youtube="";
  twitter="";
  getMainData() {
    this._DataService.getMainData().subscribe({
      next: (res: ApiResponse) => {
        this.hero_title = res?.data[0]?.hero_title || '';
        this.hero_details = res?.data[0]?.hero_details || '';
        this.hero = res?.data[0]?.hero || '';
        this.facebook = res?.data[0]?.facebook || '';
        this.insta = res?.data[0]?.insta || '';
        this.youtube = res?.data[0]?.youtube || '';
        this.twitter = res?.data[0]?.twitter || '';
        this.splitHeroTitle();
      },
      error: (err) => {
        console.log("errrrrrror", err);
      }
    })
  }

  splitHeroTitle() {
    const words = this.hero_title.split(' ');
    if (words.length >= 3) {
      this.firstWord = words[0];
      this.middleText = words.slice(1, -1).join(' ');
    } else if (words.length === 2) {
      this.firstWord = words[0];
      this.lastTwoWords = words[1];
    } else {
      this.firstWord = this.hero_title;
    }
  }

  ngOnInit(): void {
    this.getMainData();
  }
}
