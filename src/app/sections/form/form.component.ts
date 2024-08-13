import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'jquery';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  myform:FormGroup;
  inView: boolean = false;

  constructor(private http:HttpClient ,private elementRef: ElementRef) {
   this.myform = new FormGroup( {
    email : new FormControl('',[Validators.required,Validators.email])
   })

  }

  onSubmite(data:{
    email:string
  }) {
    const baseUrl = "https://ucti.com.sa/contactus/"
    if(this.myform.valid) {
       this.http.post(baseUrl,data).subscribe((respone)=>{
      this.myform.reset()
    })
    }

  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentTop = this.elementRef.nativeElement.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    this.inView = componentTop <= viewportHeight - 100; // Adjust threshold as needed
  }
  

}
