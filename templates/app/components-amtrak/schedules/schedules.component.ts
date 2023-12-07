import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetServiceService } from 'templates/app/services/get-service.service';
import { InsertServiceService } from 'templates/app/services/insert-service.service';
import { UpdateServiceService } from 'templates/app/services/update-service.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent  implements OnInit{
  showNewScheduleForm: boolean = false;
  selectedTrain: any = '';
  selectedStartDay: any = '';
  selectedEndDay: any = '';
  startTime: any = '';
  endTime: any = '';
  existingSchedules: any= [];
  trains: any = [];
  isEditClicked: boolean = false;
  stations : any = [
   
  ];
  masterStations: any = [];
  selectedScheduleForEdit: any = null;
  selectedStartStation: any = null;
  selectedEndStation  : any = null;

  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


  constructor(private router: Router,public getService: GetServiceService, public insertService: InsertServiceService , public updateService: UpdateServiceService) {}
  
  ngOnInit(): void {
    this.getStations();
    this.getTrains();
    this.getSchedules();
  }

  getTrains(){
    this.getService.getTrains().subscribe((res)=>{
      if(res){
        this.trains = res;
      }
    })
  }
  

  getSchedules(){
    this.getService.getSchedules().subscribe((res)=>{
      this.existingSchedules = res;

      this.existingSchedules.forEach((sch: any)=>{
        sch.stations.sort((a: any,b: any)=> a.sequence - b.sequence);
    })
  });
  }

  addNewSchedule() {
    this.showNewScheduleForm = true;
  }

  saveNewSchedule() {
    if(this.isEditClicked){      
    var train = this.trains.find((train:any) => train.name === this.selectedTrain);
      this.stations.sort((a: any,b: any)=> a.sequence - b.sequence);  
      var station = this.masterStations.find((st: any)=> st.stationName == this.selectedEndStation);
      let seq = this.stations[this.stations.length -1].sequence;
      station['sequence']= Number(seq) + 1;
      station['arrivalTime'] = this.endTime;
      this.stations.push(station);
      var body ={
        _id: this.selectedScheduleForEdit._id,
        trainName: this.selectedTrain,
        startStation: train.startStation,
        destinationStation: train.destinationStation,
        startDay: this.selectedStartDay,
        endDay:this.selectedEndDay,
        startTime:this.startTime,
        endTime: this.endTime,
        stations: this.stations.filter((c: any)=> c.sequence != null)
      }

      this.updateService.updateSchedule(body).subscribe((res)=>{
        this.OnBackClicked();
      this.getSchedules();
      this.isEditClicked = false;
      })

    }
    else{
    var train = this.trains.find((train:any) => train.name === this.selectedTrain);
    var station = this.masterStations.find((st: any)=> st.stationName == this.selectedEndStation);
    this.stations.sort((a: any,b: any)=> a.sequence - b.sequence);
    let seq = this.stations[this.stations.length -1].sequence;
    station['sequence']= Number(seq) + 1;
    station['arrivalTime'] = this.endTime;
    this.stations.push(station);
    var bodyForNew ={
      trainName: this.selectedTrain,
      startStation: train.startStation,
      destinationStation: train.destinationStation,
      startDay: this.selectedStartDay,
      endDay:this.selectedEndDay,
      startTime:this.startTime,
      endTime: this.endTime,
      stations: this.stations.filter((c: any)=> c.sequence != null)
    }
    this.insertService.addSchedule(bodyForNew).subscribe((res)=>{
      this.showNewScheduleForm = false;
      this.OnBackClicked();
      this.getSchedules();
    })
  }
  }

  onTrainSelectedChange(){
    var train = this.trains.find((train:any) => train.name === this.selectedTrain);
    this.selectedStartStation = train.startStation;
    this.selectedEndStation    = train.destinationStation;
    this.stations = this.stations.filter((station: any)=> station.stationName !== this.selectedEndStation);
    this.stations.forEach((st : any)=>{
      st.sequence = null;
      st.arrivalTime = null;
    })
    this.stations.forEach((st : any)=>{
      if(st.stationName == this.selectedStartStation){
        st.sequence = 1;
      }
      
    })
  }

  getStartStation() {
    var train = this.trains.find((train: any) => train.name === this.selectedTrain);
    return train ? train.startStation : '';
  }

  getEndStation() {
    var train = this.trains.find((train:any) => train.name === this.selectedTrain);
    return train ? train.destinationStation : '';
  }

  OnBackClicked(){
    this.showNewScheduleForm = false;
    this.selectedTrain=null;
    this.selectedEndDay= null;
    this.selectedStartDay = null;
    this.selectedEndDay = null;
    this.isEditClicked = false;
    this.startTime= null;
    this.endTime= null;
    this.stations.forEach((st : any)=>{
      st.sequence = null;
      st.arrivalTime = null;
    })
  }

  editSchedule(schedule: any ){
    this.selectedTrain=schedule.trainName;
    this.selectedEndDay= schedule.endDay;
    this.selectedStartDay = schedule.startDay;
    
    var train = this.trains.find((train:any) => train.name === this.selectedTrain);
    this.selectedStartStation = train.startStation;
    this.selectedEndStation    = train.destinationStation;
    this.stations = schedule.stations;
    this.stations.pop();
    this.startTime= schedule.startTime;
    this.endTime= schedule.endTime;
    this.isEditClicked = true;
    this.masterStations.forEach((station: any)=>{
      if(!this.stations.find((st: any )=> st.stationName  == station.stationName) && station.stationName != this.selectedEndStation){
        station.sequence = null;
        station.arrivalTime = null;
        this.stations.push(station);
      }
    })
    this.selectedScheduleForEdit = schedule;
  }

  toggleStatus(schedule: any){
    
  }

  getStations(){
    this.getService.getStations().subscribe((res)=>{
      if(res){
        this.masterStations = res;
        this.stations = res;
        this.stations.forEach((st : any)=>{
          st.sequence = null;
          st.arrivalTime = null;
        })
      }
    })
  }

}

