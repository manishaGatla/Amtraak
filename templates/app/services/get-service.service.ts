import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor(private httpclient : HttpClient) { }
  baseUrl = "http://127.0.0.1:5000/";

  user : any ={
    name : null,
    email : null,
    password: null,
    phoneNumber: null,
    dob: null,
    gender: null,
    isAdmin   :false,
    isCustomer: false
  };
  isLoginSuccessful : boolean = false;


  getUser(userEmail: any): Observable<any>{
    return this.httpclient.get(this.baseUrl +'getAllDetails/'+userEmail );
  }

  getStations(): Observable<any>{
    return this.httpclient.get(this.baseUrl +'api/login');
  }
  
  getTrains(userEmail: any, password: any): Observable<any>{
    return this.httpclient.get(this.baseUrl +'api/login');
  }

  getSchedules(userEmail: any, password: any): Observable<any>{
    return this.httpclient.get(this.baseUrl +'api/login');
  }

  getTickets(userEmail: any, password: any): Observable<any>{
    return this.httpclient.get(this.baseUrl +'api/login');
  }

}
