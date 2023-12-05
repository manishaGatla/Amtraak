import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetServiceService } from 'templates/app/services/get-service.service';
import { InsertServiceService } from 'templates/app/services/insert-service.service';
import { UpdateServiceService } from 'templates/app/services/update-service.service';

@Component({
  selector: 'app-stations-amtraak',
  templateUrl: './stations-amtraak.component.html',
  styleUrls: ['./stations-amtraak.component.scss']
})
export class StationsAmtraakComponent {
  stations = [
    { name: 'Station A', location: 'Location A', editable: false },
    { name: 'Station B', location: 'Location B', editable: false },
    // Add more station data as needed
  ];
  stationName: any = null;
  stationLocation: any = null;
  showStationForm: boolean = false;

  constructor(private router: Router,public getService: GetServiceService, public insertService: InsertServiceService , public updateService: UpdateServiceService) {}
  showAddStationForm() {
    this.showStationForm = true;
  }

  toggleEdit(station: any) {
    station.editable = !station.editable;
  }

  OnBackClicked(){
    this.showStationForm = false;
    this.stationName = null;
    this.stationLocation = null;
  }

}
