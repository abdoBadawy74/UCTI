import { Component, ElementRef, HostListener } from '@angular/core';
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
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  inView: boolean = false;
  constructor(private elementRef: ElementRef,private _DataService:DataService) {}

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentTop = this.elementRef.nativeElement.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      this.inView = componentTop <= viewportHeight - 100; // Adjust threshold as needed
    }
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.getMainData();
    }
name:string="";
description="";
    getMainData() {
      this._DataService.getMainData().subscribe({
        next: (res: ApiResponse) => {
          this.name = res?.data[0]?.name || '';
          this.description = res?.data[0]?.description || '';

        },
        error: (err) => {
          console.log("errrrrrror", err);
        }
      })
    }
}
