import { Component, OnInit } from '@angular/core';
import { GetServiceService } from 'templates/app/services/get-service.service';
import { InsertServiceService } from 'templates/app/services/insert-service.service';
import { UpdateServiceService } from 'templates/app/services/update-service.service';

@Component({
  selector: 'app-bookings-amtraak',
  templateUrl: './bookings-amtraak.component.html',
  styleUrls: ['./bookings-amtraak.component.scss']
})
export class BookingsAmtraakComponent implements OnInit {
  trainName: string = '';
  fromStation: string = '';
  toStation: string = '';
  stations: any[] = []; // Array to hold station options
  searchResults: any =[];
  searchPerformed: boolean = false;
  constructor(public getService: GetServiceService, public insertService: InsertServiceService , public updateService: UpdateServiceService) {}

  ngOnInit() {
    // Fetch stations from the service on component initialization
    
  }

  searchTrains() {
    this.searchPerformed = true;
  }

}
