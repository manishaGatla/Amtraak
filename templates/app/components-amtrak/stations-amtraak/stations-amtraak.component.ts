import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetServiceService } from 'templates/app/services/get-service.service';
import { InsertServiceService } from 'templates/app/services/insert-service.service';
import { UpdateServiceService } from 'templates/app/services/update-service.service';

@Component({
  selector: 'app-stations-amtraak',
  templateUrl: './stations-amtraak.component.html',
  styleUrls: ['./stations-amtraak.component.scss']
})
export class StationsAmtraakComponent  implements OnInit{

  ngOnInit(): void {
    this.getStations();
  }
  stations : any = [
    // { name: 'Station A', location: 'Location A', editable: false },
    // { name: 'Station B', location: 'Location B', editable: false },
    // // Add more station data as needed
  ];
  stationName: any = null;
  stationLocation: any = null;
  showStationForm: boolean = false;

  constructor(private router: Router,public getService: GetServiceService, public insertService: InsertServiceService , public updateService: UpdateServiceService) {}
  showAddStationForm() {
    this.showStationForm = true;
  }

  toggleEdit(station: any) {
    if(station.editable){
      this.updateStation(station);
    }
    else{
      station.editable = !station.editable;
    }
    
  }
  cancelEdit(station: any){
    station.editable = !station.editable;
    station.updatedName =     station.stationName;
    station.updatedLocation = station.location;
  }

  OnBackClicked(){
    this.showStationForm = false;
    this.stationName = null;
    this.stationLocation = null;
  }

  getStations(){
    this.getService.getStations().subscribe((res)=>{
      if(res){
        this.stations = res;
        this.stations.forEach((c: any)=>{
          c.updatedName = c.stationName;
          c.updatedLocation = c.location;
          c.editable = false;
        })
      }
    })
  }


  addStation(){
    var body = {
      stationName : this.stationName,
      location: this.stationLocation
    }
    this.insertService.addStation(body).subscribe((res)=>{
      if(res){
        this.showStationForm = false;
        this.stationName = null;
        this.stationLocation = null;
        this.getStations();
      }
     
    })
  }

  updateStation(station: any){
    var body = {
      _id: station._id,
      stationName : station.updatedName,
      location: station.updatedLocation
    }
    this.updateService.updateStation(body).subscribe((res)=>{
      if(res){
        this.getStations();
      }
    })
  }

}
