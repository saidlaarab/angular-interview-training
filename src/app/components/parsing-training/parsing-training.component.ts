import { Component } from '@angular/core';

@Component({
  selector: 'app-parsing-training',
  standalone: true,
  imports: [],
  templateUrl: './parsing-training.component.html',
  styleUrl: './parsing-training.component.css'
})
export class ParsingTrainingComponent {
  number: number;
  formattedDate: string;
  constructor(){
    // Parsing numbers
    this.number =  parseFloat("12.99"); // --> 12.99
    this.number =  parseInt("12.99"); // --> 12

    // Parsing dates
    // Formatting dates using Intl.DateTimeFormat
    const formatter = Intl.DateTimeFormat('en',{
      weekday: 'long', // for displaying day (long --> whole name)
      day: 'numeric',
      month: 'long', // for month name (long --> whole name)
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    });

    const dateStr = '1/12/2024 23:30';
    const dateParts = dateStr.match(/\d+/g);
    let [day, month, year, hour, minute] = dateParts !== null ? dateParts.map(Number) : [];

    const date = new Date(year,month -1, day,hour,minute);
    console.log('date parts : ', formatter.formatToParts(date));
    this.formattedDate = formatter.format(date);
    console.log('formatted date :', this.formattedDate);
  }
}
