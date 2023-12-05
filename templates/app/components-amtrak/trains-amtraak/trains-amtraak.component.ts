import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetServiceService } from 'templates/app/services/get-service.service';
import { InsertServiceService } from 'templates/app/services/insert-service.service';
import { UpdateServiceService } from 'templates/app/services/update-service.service';

@Component({
  selector: 'app-trains-amtraak',
  templateUrl: './trains-amtraak.component.html',
  styleUrls: ['./trains-amtraak.component.scss']
})
export class TrainsAmtraakComponent {

  showTrainForm: boolean = false;
  stations:any = [
    { _id : 1,name: 'Station A'},
    { _id : 2, name: 'Station B'},
    // Add more station details for the journey
  ]
  trains = [
    { name: 'Train 1', startStation: 'Station A', destinationStation: 'Station B', editable: false },
    { name: 'Train 2', startStation: 'Station C', destinationStation: 'Station D', editable: false },
    // Add more train data as needed
  ];
  showEditForm: boolean = false;
  selectedTrain: any;
  trainName: any = '';
  startStation: any = '';
  endStation: any = '';

  constructor(private router: Router,public getService: GetServiceService, public insertService: InsertServiceService , public updateService: UpdateServiceService) {}

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
  }

  saveEdit(index: number) {
    this.trains[index].editable = false;
    // You can add logic here to save the edited values if needed
  }
}
