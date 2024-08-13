import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {AbstractControl, FormControl , FormGroup ,ReactiveFormsModule,ValidatorFn, Validators} from '@angular/forms'
import { DataService } from 'src/app/data.service';
// ReactiveFormsModule
@Component({
  selector: 'app-jion-usas-company',
  templateUrl: './jion-usas-company.component.html',
  styleUrls: ['./jion-usas-company.component.css']
})
export class JionUSasCompanyComponent {



  selectedOption :any =[];




  registerForm : FormGroup ;
  constructor(private http:HttpClient,public DataService:DataService) {
    this.registerForm = new FormGroup({
      name : new FormControl('', [Validators.required , Validators.minLength(5) , Validators.maxLength(20)]),
      email : new FormControl('',  [Validators.required , Validators.email]),
      location : new FormControl('' , Validators.required),
      route : new FormControl('' , Validators.required),
      emp_no : new FormControl('' , [Validators.required,Validators.pattern(/^[0-9]+$/) ]),
      courses : new FormControl('')
    })
  }
  onSubmit(data:{
    name:string,
    email:string,
    location:string,
    emp_no:number,
    route:string,
    courses:string

  }) {

    console.log(data);

    if(this.registerForm.valid) {
this.http.post("https://ucti.com.sa/join-us-as-company/",data).subscribe((response)=>{
        this.registerForm.reset();

    })
    }



  }
  ngOnInit() {
    this.getData();
  }
   getData(){
    return this.DataService.getEduRoutesData().subscribe((info)=>{

      this.selectedOption = info.data ;
      console.log(this.selectedOption)

    })

   }

}








