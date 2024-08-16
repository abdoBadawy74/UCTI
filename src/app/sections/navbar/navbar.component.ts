import { ViewportScroller } from '@angular/common';
import {
  Component,
  HostListener,
  OnInit,
  AfterViewChecked,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterViewChecked {
  isScrolled: boolean = false;
  isExpanded: boolean | undefined;
  logo: string = '';

  constructor(private router: Router, private _DataService: DataService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.url.split('#')[1];
        if (fragment) {
          this.scrollToSection(fragment);
        }
      }
    });
  }

  scrollToSection(sectionId: string) {
    this.router.navigate(['/'], { fragment: sectionId }).then(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  isActive(sectionId: string): boolean {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      return rect.top <= 63 && rect.bottom >= 100; // Adjust the offset as needed
    }
    return false;
  }
  mainData: any;
  getMainData() {
    this._DataService.getMainData().subscribe({
      next: (res: ApiResponse) => {
        this.mainData = res.data;
      },
      error: (err) => {
        console.log('Error', err);
        alert('errrrrrrr1');
      },
    });
  }

  ngOnInit(): void {
    this.getMainData();
    setTimeout(() => {
      this.isExpanded = true;
    }, 2000);
  }

  ngAfterViewChecked(): void {
    if (this.isExpanded !== true) {
      this.isExpanded = true;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }
}
