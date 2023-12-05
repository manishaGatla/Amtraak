import { Component } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent {
  showNewScheduleForm: boolean = false;
  selectedTrain: string = '';
  selectedDay: string = '';
  startTime: string = '';
  endTime: string = '';
  existingSchedules: any= [
    { 
      trainName: 'Train A', 
      dayOfWeek: 'Monday', 
      startTime: '08:00', 
      endTime: '16:00', 
      isActive: true, 
      stations: [
        { name: 'Station A', startTime: '08:00', sequence: 1 },
        { name: 'Station B', startTime: '09:00', sequence: 2 },
        // Add more stations for Train A as needed
      ] 
    },
    { 
      trainName: 'Train B', 
      dayOfWeek: 'Wednesday', 
      startTime: '09:00', 
      endTime: '17:00', 
      isActive: true, 
      stations: [
        { name: 'Station X', startTime: '09:00', sequence: 1 },
        { name: 'Station Y', startTime: '10:00', sequence: 2 },
        // Add more stations for Train B as needed
      ] 
    },
    // Add more existing schedules as needed
  ];
  trains = [
    { name: 'Train A', startStation: 'Station X', endStation: 'Station Y' },
    { name: 'Train B', startStation: 'Station P', endStation: 'Station Q' },
    // Add more train data as needed
  ];

  stations = [
    { name: 'Station X', sequence: '' },
    { name: 'Station Y', sequence: '' },
    // Add more stations as needed
  ];

  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  addNewSchedule() {
    this.showNewScheduleForm = true;
  }

  saveNewSchedule() {
    // Logic to save new schedule data
    // Handle form submission, save schedule details to database or perform actions
    this.showNewScheduleForm = false;
  }

  getStartStation() {
    // Logic to get start station based on selected train
    const train = this.trains.find(train => train.name === this.selectedTrain);
    return train ? train.startStation : '';
  }

  getEndStation() {
    // Logic to get end station based on selected train
    const train = this.trains.find(train => train.name === this.selectedTrain);
    return train ? train.endStation : '';
  }

  OnBackClicked(){
    this.showNewScheduleForm = false;
    this.selectedTrain= '';
    this.selectedDay= '';
    this.startTime= '';
    this.endTime= '';
    this.stations.forEach((st : any)=>{
      st.sequence = '';
    })
  }

  editSchedule(schedule: any ){

  }

  toggleStatus(schedule: any){
    
  }
}

