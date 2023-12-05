import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor() { }

  user : any ={
    name : null,
    email : null,
    password: null,
    phoneNumber: null,
    dob: null,
    gender: null

  };
}
