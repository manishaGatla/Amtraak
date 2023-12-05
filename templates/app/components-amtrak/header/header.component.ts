import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetServiceService } from 'templates/app/services/get-service.service';
import { InsertServiceService } from 'templates/app/services/insert-service.service';
import { UpdateServiceService } from 'templates/app/services/update-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router,public getService: GetServiceService, public insertService: InsertServiceService , public updateService: UpdateServiceService) {}

  logOut(){
    this.getService.isLoginSuccessful = false;
    this.getService.user = {
      name : null,
      email : null,
      password: null,
      phoneNumber: null,
      dob: null,
      gender: null
  
    };
    this.router.navigateByUrl('/login');
  }


}
