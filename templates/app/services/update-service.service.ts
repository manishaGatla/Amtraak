import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

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

  updateStation(reqBody: any): Observable<any>{
    return this.httpclient.post(this.baseUrl + "register", reqBody);
  }

  updateTrain(reqBody: any): Observable<any>{
    return this.httpclient.post(this.baseUrl + "register", reqBody);
  }
}
