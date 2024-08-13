import { Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent {
  trainers :any = [] ;
  id:string = '';

  constructor(public _ActivatedRoute:ActivatedRoute, public _DataService:DataService ,private elementRef: ElementRef){
    this._DataService.getTrainersData().subscribe((info)=>{
      this.trainers = info.data;
      console.log(this.trainers);

    })
}
@ViewChildren('animat') animatElements!: QueryList<ElementRef>;


ngAfterViewInit() {
  this.checkInView(); // Check visibility immediately after view initialization
  window.addEventListener('scroll', () => this.checkInView());
  window.addEventListener('load', () => this.checkInView()); // Check visibility on page load
}

@HostListener('window:scroll', ['$event'])
onScroll() {
  this.checkInView();
}

checkInView() {
  const viewportHeight = window.innerHeight;

  this.animatElements.forEach(elementRef => {
    const element = elementRef.nativeElement as HTMLElement;
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top <= viewportHeight - 100 && rect.bottom >= 0;

    if (isVisible) {
      element.classList.add('flipIn');
      element.classList.remove('flipOut');
    } else {
      element.classList.add('flipOut');
      element.classList.remove('flipIn');
    }
  });
}
}
