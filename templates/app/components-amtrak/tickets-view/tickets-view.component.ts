import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetServiceService } from 'templates/app/services/get-service.service';
import { InsertServiceService } from 'templates/app/services/insert-service.service';
import { UpdateServiceService } from 'templates/app/services/update-service.service';

@Component({
  selector: 'app-tickets-view',
  templateUrl: './tickets-view.component.html',
  styleUrls: ['./tickets-view.component.scss']
})
export class TicketsViewComponent implements OnInit {
  tickets: any = [];
  ngOnInit(): void {
    this.getTickets();
  }
  constructor(public router: Router,public getService: GetServiceService, public insertService: InsertServiceService , public updateService: UpdateServiceService) {}


  getTickets(){
    if(this.getService.user.isCustomer){
      this.getService.getAllTicketsOfUser(this.getService.user).subscribe((res)=>{
        this.tickets = res;
      })
    }
    else{
      this.getService.getAllTickets().subscribe((res)=>{
        this.tickets = res;
      })
    }
    
  }

  cancelReservation(ticket: any) {
    this.updateService.updateTicket(ticket).subscribe((res)=>{
      this.getTickets();
    })
  }
}
