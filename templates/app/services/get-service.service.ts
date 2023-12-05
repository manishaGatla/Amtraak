import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor(private httpclient : HttpClient) { }
  baseUrl = "https://localhost:5000/";

  user : any ={
    name : null,
    email : null,
    password: null,
    phoneNumber: null,
    dob: null,
    gender: null

  };
  isLoginSuccessful : boolean = false;
  isAdmin: boolean = false;
  isCustomer: boolean = false;

  getUser(userEmail: any, password: any): Observable<any>{
    return this.httpclient.get(this.baseUrl +'api/login?emailid='+userEmail + "&password=" + password);
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
