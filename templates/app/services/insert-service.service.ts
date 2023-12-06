import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsertServiceService {

  constructor(private httpclient : HttpClient) { }
  baseUrl = "http://127.0.0.1:5000/";
  user : any ={
    name : null,
    email : null,
    password: null,
    phoneNumber: null,
    dob: null,
    gender: null

  };


  registerUser(reqBody: any): Observable<any>{
    return this.httpclient.post(this.baseUrl + "register", reqBody);
  }

  addTrain(reqBody: any): Observable<any>{
    return this.httpclient.post(this.baseUrl + "register", reqBody);
  }

  addStation(reqBody: any): Observable<any>{
    return this.httpclient.post(this.baseUrl + "register", reqBody);
  }

  addSchedule(reqBody: any): Observable<any>{
    return this.httpclient.post(this.baseUrl + "register", reqBody);
  }
}
