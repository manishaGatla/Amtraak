import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetServiceService } from 'templates/app/services/get-service.service';
import { InsertServiceService } from 'templates/app/services/insert-service.service';
import { UpdateServiceService } from 'templates/app/services/update-service.service';

@Component({
  selector: 'app-trains-amtraak',
  templateUrl: './trains-amtraak.component.html',
  styleUrls: ['./trains-amtraak.component.scss']
})
export class TrainsAmtraakComponent implements OnInit{

  showTrainForm: boolean = false;
  stations:any = [
   
  ]
  trains: any = [
   
  ];
  showEditForm: boolean = false;
  selectedTrain: any;
  trainName: any = '';
  trainFirstClass: any = '';
  trainNumber : any ='';
  startStation: any = '';
  endStation: any = '';
  trainBusinessClass: any ='';
  platformNumber: any  ='';
  trainEconomyClass : any = '';

  constructor(private router: Router,public getService: GetServiceService, public insertService: InsertServiceService , public updateService: UpdateServiceService) {}


  ngOnInit(): void {
    this.getStations();
    this.getTrains();
  }

  getStations(){
    this.getService.getStations().subscribe((res)=>{
      if(res){
        this.stations = res;
       
      }
    })
  }


  showAddTrainForm() {
    this.showTrainForm = true;
  }

  openEditForm(train: any) {
    this.selectedTrain = train;
    this.showEditForm = true;
  }

  OnBackClicked(){
    this.showEditForm = false;
    this.showTrainForm = false;
    this.trainName = null;
    this.startStation = null;
    this.endStation = null;
  }
  toggleEdit(index: number) {
    this.trains[index].editable = !this.trains[index].editable;
    this.trains[index].updatedTrainNumber = this.trains[index].trainNumber;
    this.trains[index].updatedTrainName = this.trains[index].trainName;
    this.trains[index].updatedFirstClassNoOfSeats = this.trains[index].firstClassNoOfSeats;
    this.trains[index].updatedBusinessClassNoOfSeats = this.trains[index].businessClassNoOfSeats;
    this.trains[index].updatedEconomyClassNoOfSeats = this.trains[index].economyClassNoOfSeats;
    this.trains[index].updatedPlatformNumber = this.trains[index].platformNumber
  }

  saveEdit(index: number) {
    var body = {
      _id: this.trains[index]._id,
      trainName               :this.trains[index].updatedTrainName,
      trainNumber : this.trains[index].updatedTrainNumber,
      firstClassNoOfSeats          : this.trains[index].updatedFirstClassNoOfSeats,
      businessClassNoOfSeats       : this.trains[index].updatedBusinessClassNoOfSeats,
      economyClassNoOfSeats        : this.trains[index].updatedEconomyClassNoOfSeats,
      platformNumber               : this.trains[index].updatedPlatformNumber
    }
    this.updateService.updateTrain(body).subscribe((res)=>{
      if(res){
        this.getTrains();
      }
    })
  }

  addTrain(){
    var body ={
      trainName              :this.trainName,
      trainNumber: this.trainNumber,
      
      firstClassNoOfSeats        : this.trainFirstClass,
      businessClassNoOfSeats : this.trainBusinessClass,
      economyClassNoOfSeats        : this.trainEconomyClass,
      platformNumber : this.platformNumber
    }
    this.insertService.addTrain(body).subscribe((res)=>{
      if(res){
        this.showTrainForm = false;
        this.getTrains();
      }
    })
  }

  getTrains(){
    this.getService.getTrains().subscribe((res)=>{
      if(res){
        this.trains = res;
        this.trains.forEach((c: any)=>{
          c.updatedName = c.name;
          c.updatedDestinationStation = c.destinationStation;
          c.updatedStartStation = c.startStation;
          c.updatedFirstClassNoOfSeats = c.firstClassNoOfSeats
          c.updatedBusinessClassNoOfSeats= c.businessClassNoOfSeats
          c.updatedEconomyClassNoOfSeats =c.economyClassNoOfSeats
          c.updatedPlatformNumber = c.platformNumber
          
          c.editable = false;
        })
      }
    })
  }
}
