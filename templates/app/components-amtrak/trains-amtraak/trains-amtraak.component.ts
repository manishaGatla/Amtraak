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
  startStation: any = '';
  endStation: any = '';

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
    this.trains[index].updatedDestinationStation = this.trains[index].destinationStation;
    this.trains[index].updatedStartStation = this.trains[index].startStation;
  }

  saveEdit(index: number) {
    var body = {
      _id: this.trains[index]._id,
      name               :this.trains[index].updatedName,
      destinationStation : this.trains[index].updatedDestinationStation,
      startStation        : this.trains[index].updatedStartStation
    }
    this.updateService.updateTrain(body).subscribe((res)=>{
      if(res){
        this.getTrains();
      }
    })
  }

  addTrain(){
    var body ={
      name              :this.trainName,
      destinationStation:this.endStation,
      startStation      :this.startStation,
      noOfSeatsInBusinessClass: 50,
      noOfSeatsInFirstClass: 30 
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
          c.editable = false;
        })
      }
    })
  }
}
