import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-training-lines',
  templateUrl: './training-lines.component.html',
  styleUrls: ['./training-lines.component.css'],
})
export class TrainingLinesComponent  {
  eduRoutes: any = [];

  @ViewChildren('contentContainer') contentContainers!: QueryList<ElementRef>;
  inView: boolean = false;
 
  constructor(
    public _DataService: DataService,
    public elementRef:ElementRef
  ) {
    this._DataService.getEduRoutesData().subscribe((info) => {
      this.eduRoutes = info.data;
      for (let i = 0; i < this.eduRoutes.length; i++) {}
    });
  }


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentTop = this.elementRef.nativeElement.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    this.inView = componentTop <= viewportHeight - 100; // Adjust threshold as needed
  }
}
