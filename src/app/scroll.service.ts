import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollToSectionSource = new Subject<void>();

  scrollToSection$ = this.scrollToSectionSource.asObservable();

  triggerScroll() {
    this.scrollToSectionSource.next();
  }
}
