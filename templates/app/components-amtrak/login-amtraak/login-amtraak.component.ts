import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-amtraak',
  templateUrl: './login-amtraak.component.html',
  styleUrls: ['./login-amtraak.component.scss']
})
export class LoginAmtraakComponent implements OnInit {

  constructor( private router: Router){}
  user : any = {
    email: null,
    password: null
  }
  showNotApprovedMsg: boolean =false;
  showIncorrectPasswordError: boolean = false;
  showNoUser: boolean = false;
  isPasswordVisible: boolean = false;
  ngOnInit():void{

  }

  togglePasswordVisibility(){
    this.isPasswordVisible = !this.isPasswordVisible;
  }

}
