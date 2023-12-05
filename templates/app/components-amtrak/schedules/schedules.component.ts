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
}
