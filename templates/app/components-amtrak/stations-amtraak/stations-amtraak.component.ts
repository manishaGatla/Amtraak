import { Component } from '@angular/core';

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

  // Functions to toggle form visibility
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
