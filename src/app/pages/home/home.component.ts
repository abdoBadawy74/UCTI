import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ScrollService } from 'src/app/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('weAreSection') weAreSection!: ElementRef;

  constructor(private scrollService: ScrollService) {
    this.scrollService.scrollToSection$.subscribe(() => {
      this.scrollToWeAreSection();
    });
  }

  scrollToWeAreSection() {
    if (this.weAreSection) {
      this.weAreSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
