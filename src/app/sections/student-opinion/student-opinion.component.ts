
import { DataService } from 'src/app/data.service';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-student-opinion',
  templateUrl: './student-opinion.component.html',
  styleUrls: ['./student-opinion.component.css'], 
})
export class StudentOpinionComponent {

  DataOPenion:any=[];
  rates:any = [0,1,2,3,4];
  rate!:number  ;
  finalRateArray:any=[]
  inView: boolean = false;
  isPrevActive = false;
  isNextActive = false;

  prevSlide(): void {
    this.isPrevActive = true;
    this.isNextActive = false;
  }

  nextSlide(): void {
    this.isPrevActive = false;
    this.isNextActive = true;
  }
  activeSlide: number = 0;

  onSlideChange(event: any): void {
    // Bootstrap uses a 'slid.bs.carousel' event when a slide transition completes
    this.activeSlide = event.to; // Update activeSlide with the index of the newly active slide
  }


  constructor(private _DataService:DataService,private elementRef: ElementRef) {
   _DataService.getOpenionData().subscribe((res)=>{
    this.DataOPenion = res.data;
  let finalRate= this.rates.slice(this.rate);
  this.finalRateArray = finalRate;



  for(let i of this.DataOPenion ) {
    let rate1 = i.rate;
    this.rate = rate1;
    console.log(i.rate);

  }
   })
  }
  getRange(num: number): number[] {
    return Array(num).fill(0).map((x, i) => i);
  }


  private lastScrollTop = 0; // Track the last scroll position


  ngOnInit() {
    this.checkScroll(); // Initial check
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const elements = this.elementRef.nativeElement.querySelectorAll('.animate-from-right, .animate-from-left');
    const viewportHeight = window.innerHeight;
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    elements.forEach((el: HTMLElement) => {
      const rect = el.getBoundingClientRect();

      // Check if the element is in view
      const isInView = rect.top <= viewportHeight - 100 && rect.bottom >= 0;

      // Apply the animation only if scrolling down and the element is in view
      if (isInView && currentScrollTop > this.lastScrollTop) {
        el.classList.add('appear');
      }

      // Remove the animation class if scrolling up
      if (currentScrollTop <= this.lastScrollTop) {
        el.classList.remove('appear');
      }
    });

    this.lastScrollTop = currentScrollTop; // Update the last scroll position
  }




 
}
