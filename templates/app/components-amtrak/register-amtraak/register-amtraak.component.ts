import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-amtraak',
  templateUrl: './register-amtraak.component.html',
  styleUrls: ['./register-amtraak.component.scss']
})
export class RegisterAmtraakComponent implements OnInit {

  constructor( private router: Router){}
  confirmPassword: any = null;
  isPhoneNumberValid: boolean = true;
  customer: any ={
    name : null,
    email : null,
    password: null,
    phoneNumber: null,
    dob: null,
    gender: null,
    

  };
  isPasswordVisible: boolean = false;
  isConfirmPasswordVisible: boolean = false;
  showMisMatchError: boolean = false;


    
  ngOnInit(): void {
  }


  togglePasswordVisibility(){
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleConfirmPasswordVisibility(){
    this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
  }

  validatePhoneNumber(event: Event) {
    if((event.target as HTMLInputElement).value != null){
    const inputValue = (event.target as HTMLInputElement).value;
    const phoneNumberPattern = /^[0-9]{10}$/;
    this.isPhoneNumberValid = phoneNumberPattern.test(inputValue);
    }
}

isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email != null  && email != "" ? emailRegex.test(email) : true;
}

registercustomer(){

}
}
