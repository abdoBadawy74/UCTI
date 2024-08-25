import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  mainData: any;
  facebook: string = '';
  insta: string = '';
  youtube: string = '';
  twitter: string = '';

  constructor(private _DataService: DataService, private router: Router) {}

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
        console.error('Error', err);
        alert('Error fetching main data');
      },
    });
  }

  navigateToSection() {
    this.router.navigate(['/home'], { fragment: 'article' });
  }

  ngOnInit(): void {
    this.getMainData();
  }
}
