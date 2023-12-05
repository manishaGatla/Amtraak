import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit() {
    // Fetch stations from the service on component initialization
    
  }

  searchTrains() {
    this.searchPerformed = true;
  }

}
