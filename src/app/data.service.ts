import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http"
import { get } from 'jquery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public _HttpClient:HttpClient) {

   }


   getTrainersData():Observable<any>
   {
    return this._HttpClient.get("https://ucti.com.sa/trainers/")
   }
   getEduRoutesData():Observable<any>
   {
    return this._HttpClient.get("https://ucti.com.sa/eduroutes/")
    }
    getEduRoutesDetails(id:string):Observable<any>
    {

     return this._HttpClient.get(`https://ucti.com.sa/eduroutes//${id}`)

    }
  getNewsData():Observable<any>
  {
    return this._HttpClient.get("https://ucti.com.sa/news/")
  }
  getNewsDetials(id:string):Observable<any> {
    return this._HttpClient.get(`https://ucti.com.sa/news/${id}/`)
  }
  getTeamData():Observable<any> {
    return this._HttpClient.get(`https://ucti.com.sa/team-manager/`)
  }

  getTrainerDetails(id:string):Observable<any>
  {

    return this._HttpClient.get(`https://ucti.com.sa/trainers/${id}/`)
  }
  getCourseDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://ucti.com.sa/course/${id}/`)

  }

  getOpenionData():Observable<any> {
    return this._HttpClient.get(`https://ucti.com.sa/reviews/`)
  }
  getValidation():Observable<any> {
    return this._HttpClient.get(`https://ucti.com.sa/verifiations/`)
  }
  getMainData():Observable<any>{
    return this._HttpClient.get(`https://ucti.com.sa/main/`)

  }
  getClients():Observable<any>{
    return this._HttpClient.get(`https://ucti.com.sa/client/`);
  }
  getGoals():Observable<any>{
    return this._HttpClient.get(`https://ucti.com.sa/goals/`);
  }
}
