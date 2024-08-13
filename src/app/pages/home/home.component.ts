import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
//   constructor(private route: ActivatedRoute,private router:Router) {}

//   ngOnInit(): void {
//     this.route.fragment.subscribe(fragment => {
//       if (fragment) {
//         this.scrollToSection(fragment);
//       }
//     });
//   }

//   ngAfterViewInit(): void {
//     this.route.fragment.subscribe(fragment => {
//       if (fragment) {
//         this.scrollToSection(fragment);
//       }
//     });
//   }

//   private scrollToSection(sectionId: string) {
//     if (this.router.url !== '/') {
//         this.router.navigate(['/'], { fragment: sectionId });
//     } else {
//         const section = document.getElementById(sectionId);
//         if (section) {
//             section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }
//     }
// }
}