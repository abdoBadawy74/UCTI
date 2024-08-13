import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-silder',
  templateUrl: './silder.component.html',
  styleUrls: ['./silder.component.css']
})
export class SilderComponent {
  data:any;
constructor(private dataSer:DataService,private cdr:ChangeDetectorRef){}
@ViewChild('nav') slider: NgImageSliderComponent | undefined;

prevImageClick() {
  this.slider!.prev();
}

nextImageClick() {
  this.slider!.next();
}
getClients() {
  this.dataSer.getClients().subscribe({
    next: (res) => {
      // Ensure that each item has the necessary properties
      this.data = res.data.map((item: any) => ({
        image: item.image,
        thumbImage: item.image, // Make sure this is correctly set
        id: item.c_id, // Make sure this is correctly set
      }));

      // Trigger change detection
      this.cdr.detectChanges();

      console.log(this.data);
    },
    error: (err) => {
      console.error('Failed to fetch data', err);
    }
  });
}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getClients();
  }

}
